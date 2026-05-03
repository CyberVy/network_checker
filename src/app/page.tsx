"use client"
import { useEffect, useState } from "react"
import { LaunchAnimation } from "@/blocks/LaunchAnimation"
import { CFChecker } from "@/blocks/CFChecker"
import { Map } from "@/blocks/Map/Map"
import { FullscreenModalContainer } from "@/components"

export default function Page(){
    const [show_launch_animation, set_show_launch_animation] = useState(true)

    useEffect(() => {
        setTimeout(() => set_show_launch_animation(false), 1500)
    }, [])

    // register service worker
    useEffect(() => {
        if ('serviceWorker' in navigator){
            navigator.serviceWorker.register('/sw.js').then(() => {
                console.log('Service worker is registered successfully.')
            }).catch(err => {console.error('Failed to register Service worker.', err)})
        }
    }, [])

    return (
        <>
            {show_launch_animation &&
                <LaunchAnimation/>}

            <div hidden={show_launch_animation}>
                <CFChecker/>     
            </div>

            <FullscreenModalContainer className={`pt-0! z-[-1] ${show_launch_animation ? "invisible" : ""}`}>
                <Map className="w-full h-full"/>
            </FullscreenModalContainer>
        </>
    )
}
