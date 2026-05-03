"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"
import { get_coords } from "@/core/location"

export type MapProps = {
    className?: string
}

function Map({ className }: MapProps){
    const map_ref = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        import("leaflet").then(async L => {
            const [latitude, longitude] = await get_coords()
            const map = L.map(map_ref.current!, { attributionControl: false }).setView([latitude, longitude], 10)
            const layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png')
            const marker = L.marker([latitude, longitude])
            layer.addTo(map)
            marker.addTo(map)
            map.zoomControl.remove()
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
