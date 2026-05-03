"use client"

import { useEffect, useState } from "react"
import { ClockResult, get_time } from "@/core/time"

function Clock(){

    const [clock, set_clock] = useState<ClockResult | null>(null)

    useEffect(() => {
        const i = window.setInterval(() => {
            const clock = get_time()
            set_clock(clock)
        }, 1000)
        return () => window.clearInterval(i)
    }, [])
    return (
        <div className="font-bold">
            {clock?.hour || ""}:{clock?.minute || ""}:{clock?.second || ""}
        </div>
    )    
}

export { Clock }
