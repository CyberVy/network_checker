"use client"

import { useSyncExternalStore } from "react"
import { ClockResult, get_time } from "@/core/time"
import { join_classes } from "@/components/utils"

export type ClockProps = {
    className?: string
}

const second_subscribers = new Set<() => void>()
let second_timer: ReturnType<typeof setInterval> | null = null
let current_second_tick = 0

function subscribe_second(callback: () => void) {
    second_subscribers.add(callback)
    if (!second_timer) {
        second_timer = setInterval(() => {
            current_second_tick++
            for (const sub of second_subscribers) {
                sub()
            }
        }, 1000)
    }
    return () => {
        second_subscribers.delete(callback)
        if (second_subscribers.size === 0 && second_timer) {
            clearInterval(second_timer)
            second_timer = null
        }
    }
}

function get_second_snapshot() {
    return current_second_tick
}

function Clock({ className }: ClockProps) {
    useSyncExternalStore(subscribe_second, get_second_snapshot, get_second_snapshot)
    const clock = get_time()

    return (
        <div className={join_classes("text-xl", className)}>
            {clock?.hour || ""}:{clock?.minute || ""}:{clock?.second || ""}
        </div>
    )
}

export { Clock }
