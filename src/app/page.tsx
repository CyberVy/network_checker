"use client"
import { useEffect, useState } from "react"
import type { CFResponseObject } from "@/core/cf_checker"
import { LaunchAnimation } from "@/blocks/LaunchAnimation"
import { CFChecker } from "@/blocks/CFChecker"
import { Map } from "@/blocks/Map/Map"
import { FullscreenModalContainer } from "@/components"

export default function Page(){
    const [show_launch_animation, set_show_launch_animation] = useState(true)
    const [cf_response_object_record, set_cf_response_object_record] = useState<Record<string, CFResponseObject | undefined>>({})

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
                <LaunchAnimation on_finish={() => set_show_launch_animation(false)} />}

            <CFChecker
                hidden={show_launch_animation}
                on_cf_response_object_record_change={set_cf_response_object_record}
            />

            <FullscreenModalContainer className={`pt-0! z-[-1] ${show_launch_animation ? "invisible" : ""}`}>
                <Map className="w-full h-full" cf_response_object_record={cf_response_object_record}/>
            </FullscreenModalContainer>
        </>
    )
}
