"use client"

import { useCallback, useRef } from "react"
import type { CFResponseObject } from "@core/cf_checker"
import * as maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import maplibre_worker_url from "maplibre-gl/dist/maplibre-gl-worker.mjs?url"
import { get_coords } from "@/core/location"
import "./Map.css"

maplibregl.setWorkerUrl(maplibre_worker_url)

type MapFeature = {
    type: "Feature"
    geometry: { type: "Point"; coordinates: [number, number] }
    properties: { label: string; is_current_location: boolean }
}

export type MapProps = {
    className?: string
    cf_response_object_record?: Record<string, CFResponseObject | undefined>
}

const MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty"
const INITIAL_CENTER: [number, number] = [120, 30]
const INITIAL_ZOOM = 4
const SOURCE_ID = "network-locations"

function Map({ className, cf_response_object_record }: MapProps) {
    const map_instance_ref = useRef<maplibregl.Map | null>(null)
    const record_ref = useRef(cf_response_object_record)
    const current_location_ref = useRef<[number, number] | null>(null)

    const update_markers = useCallback((map: maplibregl.Map) => {
        const source = map.getSource(SOURCE_ID) as maplibregl.GeoJSONSource | undefined
        if (!source) return

        const features: MapFeature[] = []
        for (const [address, response] of Object.entries(record_ref.current || {})) {
            if (response?.latitude == null || response.longitude == null) continue
            const url = new URL(address)
            features.push({
                type: "Feature",
                geometry: { type: "Point", coordinates: [response.longitude, response.latitude] },
                properties: {
                    label: [url.host.toUpperCase(), response.colo ? `(${response.colo})` : ""]
                        .filter(Boolean)
                        .join(" "),
                    is_current_location: false
                }
            })
        }
        if (current_location_ref.current) {
            features.push({
                type: "Feature",
                geometry: { type: "Point", coordinates: current_location_ref.current },
                properties: { label: "My Location", is_current_location: true }
            })
        }
        source.setData({ type: "FeatureCollection", features })
    }, [])

    const attach_map = useCallback(
        (node: HTMLDivElement | null) => {
            if (!node) return
            const map = new maplibregl.Map({
                container: node,
                style: MAP_STYLE,
                center: INITIAL_CENTER,
                zoom: INITIAL_ZOOM,
                attributionControl: false
            })
            map_instance_ref.current = map
            map.on("style.load", () => {
                map.addSource(SOURCE_ID, { type: "geojson", data: { type: "FeatureCollection", features: [] } })
                map.addLayer({
                    id: "network-location-circles",
                    type: "circle",
                    source: SOURCE_ID,
                    paint: {
                        "circle-radius": 6,
                        "circle-color": ["case", ["get", "is_current_location"], "#aaaaaa", "#60a5fa"],
                        "circle-stroke-width": 2,
                        "circle-stroke-color": ["case", ["get", "is_current_location"], "#333333", "#2563eb"]
                    }
                })
                map.addLayer({
                    id: "network-location-labels",
                    type: "symbol",
                    source: SOURCE_ID,
                    layout: {
                        "text-field": ["get", "label"],
                        "text-font": ["Noto Sans Regular"],
                        "text-size": 11,
                        "text-offset": [0, 1.4],
                        "text-anchor": "top"
                    },
                    paint: { "text-color": "#333333", "text-halo-color": "#ffffff", "text-halo-width": 1.5 }
                })
                update_markers(map)
            })
            map.on("load", async () => {
                try {
                    const [latitude, longitude] = await get_coords()
                    if (map_instance_ref.current !== map) return
                    current_location_ref.current = [longitude, latitude]
                    update_markers(map)
                    map.flyTo({ center: [longitude, latitude], zoom: 10 })
                } catch {
                    // Location permission may be denied; the map remains usable.
                }
            })
            return () => {
                map.remove()
                if (map_instance_ref.current === map) map_instance_ref.current = null
            }
        },
        [update_markers]
    )

    const attach_marker_tracker = useCallback(
        (el: HTMLSpanElement | null) => {
            if (!el) return
            record_ref.current = cf_response_object_record
            const map = map_instance_ref.current
            if (map?.isStyleLoaded()) update_markers(map)
        },
        [cf_response_object_record, update_markers]
    )

    return (
        <div className={`select-none ${className || ""}`} ref={attach_map}>
            <span ref={attach_marker_tracker} style={{ display: "none" }} />
        </div>
    )
}

export { Map }
