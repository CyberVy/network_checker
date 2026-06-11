"use client"

import { useEffect, useState } from "react"
import { ClockResult, get_time } from "@/core/time"

import { join_classes } from "@/components/utils"

export type ClockProps = {
    className?: string
}

function Clock({ className }: ClockProps){

    const [clock, set_clock] = useState<ClockResult | null>(null)

    useEffect(() => {
        const i = window.setInterval(() => {
            const clock = get_time()
            set_clock(clock)
        }, 1000)
        return () => window.clearInterval(i)
    }, [])
    return (
        <div className={join_classes("text-xl", className)}>
            {clock?.hour || ""}:{clock?.minute || ""}:{clock?.second || ""}
        </div>
    )    
}

export { Clock }
