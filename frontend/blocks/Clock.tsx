"use client"

import { useSyncExternalStore } from "react"
import { ClockResult, get_time } from "@/core/time"
import { join_classes } from "@/components/utils"

export type ClockProps = {
    className?: string
}

const second_subscribers = new Set<() => void>()
let second_timer: ReturnType<typeof setInterval> | null = null
let current_timestamp = Date.now()

function subscribe_second(callback: () => void) {
    second_subscribers.add(callback)
    if (!second_timer) {
        current_timestamp = Date.now()
        second_timer = setInterval(() => {
            current_timestamp = Date.now()
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
    return current_timestamp
}

function Clock({ className }: ClockProps) {
    const timestamp = useSyncExternalStore(subscribe_second, get_second_snapshot, get_second_snapshot)
    const clock = get_time(timestamp)

    return (
        <div className={join_classes("text-xl", className)}>
            {clock?.hour || ""}:{clock?.minute || ""}:{clock?.second || ""}
        </div>
    )
}

export { Clock }
