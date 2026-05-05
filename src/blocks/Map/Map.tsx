"use client"

import { useEffect, useRef, useState } from "react"
import type { CFResponseObject } from "@/core/cf_checker"
import type { LayerGroup, Map as LeafletMap } from "leaflet"
import "leaflet/dist/leaflet.css"
import { get_coords } from "@/core/location"
import "./Map.css"

export type MapProps = {
    className?: string
    cf_response_object_record?: Record<string, CFResponseObject | undefined>
}

const MAP_LAYERS = {
    light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    stamen: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png", // need auth
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
}
const INITIAL_CENTER: [number, number] = [30, 120]
const INITIAL_ZOOM = 4

function Map({ className, cf_response_object_record }: MapProps){
    const map_ref = useRef<HTMLDivElement | null>(null)
    const map_instance_ref = useRef<LeafletMap | null>(null)
    const marker_layer_ref = useRef<LayerGroup | null>(null)
    const leaflet_ref = useRef<typeof import("leaflet") | null>(null)
    const [map_is_ready, set_map_is_ready] = useState(false)
    
    useEffect(() => {
        let map: LeafletMap | null = null
        let query: MediaQueryList | null = null
        let callback: ((event: MediaQueryListEvent) => void) | null = null
        let is_disposed = false

        import("leaflet").then(async L => {
            if (is_disposed || !map_ref.current) return

            leaflet_ref.current = L
            query = window.matchMedia('(prefers-color-scheme: dark)')
            const is_in_dark = query.matches

            map = L.map(map_ref.current, { attributionControl: false })
            map_instance_ref.current = map
            marker_layer_ref.current = L.layerGroup().addTo(map)
            map.zoomControl.remove()
            map.setView(INITIAL_CENTER, INITIAL_ZOOM)

            let layer = L.tileLayer(is_in_dark ? MAP_LAYERS["dark"] : MAP_LAYERS["light"])
            layer.addTo(map)

            callback = (event: MediaQueryListEvent) => {
                if (!map) return
                if (event.matches){
                    layer.remove()
                    layer = L.tileLayer(MAP_LAYERS["dark"])
                    layer.addTo(map)
                }
                else {
                    layer.remove()
                    layer = L.tileLayer(MAP_LAYERS["light"])
                    layer.addTo(map)
                }
            }
            query.addEventListener('change', callback)
            set_map_is_ready(true)

            const [latitude, longitude] = await get_coords()
            if (is_disposed || !map) return

            const marker = L.circleMarker([latitude, longitude], {
                radius: 6,
                weight: 2,
                color: "#330033",
                fillColor: "#aaaaaa",
                fillOpacity: 0.85
            })
            marker.bindTooltip("My Location").addTo(map)
            map.setView([latitude, longitude], 10)
        })

        return () => {
            is_disposed = true
            if (query && callback){
                query.removeEventListener("change", callback)
            }
            map?.remove()
            map_instance_ref.current = null
            marker_layer_ref.current = null
            leaflet_ref.current = null
        }
    }, [])

    useEffect(() => {
        const L = leaflet_ref.current
        const map = map_instance_ref.current
        const marker_layer = marker_layer_ref.current
        if (!map_is_ready || !L || !map || !marker_layer) return

        marker_layer.clearLayers()
        for (const [address, cf_response_object] of Object.entries(cf_response_object_record || {})){
            if (cf_response_object?.latitude == undefined || cf_response_object.longitude == undefined) continue

            const latitude = cf_response_object.latitude
            const longitude = cf_response_object.longitude
            const url = new URL(address)
            const label = [
                url.host.toUpperCase(),
                cf_response_object.colo ? `(${cf_response_object.colo})` : ""
            ].filter(Boolean).join(" ")

            L.circleMarker([latitude, longitude], {
                radius: 6,
                weight: 2,
                color: "#2563eb",
                fillColor: "#60a5fa",
                fillOpacity: 0.85
            }).bindTooltip(label).addTo(marker_layer)
        }
    }, [cf_response_object_record, map_is_ready])
    return (
        <div 
            className={`select-none ${className}`}
            ref={map_ref}
        >
            
        </div>
    )
}

export { Map }
