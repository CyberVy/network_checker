"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"
import { get_coords } from "@/core/location"

export type MapProps = {
    className?: string
}

const MAP_LAYERS = {
    light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    stamen: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png", // need auth
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
}

function Map({ className }: MapProps){
    const map_ref = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        import("leaflet").then(async L => {
            const query = window.matchMedia('(prefers-color-scheme: dark)')
            const is_in_dark = query.matches

            const map = L.map(map_ref.current!, { attributionControl: false })
            map.zoomControl.remove()
            map.setView([0, 0], 6)

            let layer = L.tileLayer(is_in_dark ? MAP_LAYERS["dark"] : MAP_LAYERS["light"])
            layer.addTo(map)

            const [latitude, longitude] = await get_coords()
            const marker = L.marker([latitude, longitude])
            marker.addTo(map)
            
            map.setView([latitude, longitude], 10)

            const callback = (event: MediaQueryListEvent) => {
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
        })
    }, [])
    return (
        <div 
            className={`select-none ${className}`}
            ref={map_ref}
        >
            
        </div>
    )
}

export { Map }
