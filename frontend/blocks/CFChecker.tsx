"use client"

import type { CFResponseObject } from "@core/cf_checker"
import { useCallback, useState } from "react"
import { ping_cf, get_ip } from "@core/cf_checker"
import { AnimatedGlowText, Text } from "@/components"
import { useAutoSyncRefAndState } from "@/components/hooks"
import { Clock } from "./Clock"

const ADDRESS_LIST = [
    "https://gcore.xsolutiontech.com/",
    "https://ipv6.xsolutiontech.com/",
    "https://ztvi.xsolutiontech.com/",
    "https://hetzner.xsolutiontech.com/",
    "https://eo.xsolutiontech.com/",
    "https://wz.xsolutiontech.com/",
    "https://us.xsolutiontech.com/",
    "https://us2.xsolutiontech.com/",
    "https://hk.xsolutiontech.com/",
    "https://eu.xsolutiontech.com/"
]

import { join_classes } from "@/components/utils"

type CFCheckerProps = {
    on_cf_response_object_record_change?: (
        cf_response_object_record: Record<string, CFResponseObject | undefined>
    ) => void
    className?: string
    hidden?: boolean
}

function should_notify_map(
    prev_cf_response_object: CFResponseObject | undefined,
    next_cf_response_object: CFResponseObject
) {
    return (
        prev_cf_response_object?.latitude !== next_cf_response_object.latitude ||
        prev_cf_response_object?.longitude !== next_cf_response_object.longitude
    )
}

function CFChecker({ on_cf_response_object_record_change, className, hidden }: CFCheckerProps) {
    const [cf_response_object_record_ref, set_cf_response_object_record, cf_response_object_record] =
        useAutoSyncRefAndState<Record<string, CFResponseObject | undefined>>({})
    const [current_ipv4_address, set_current_ipv4_address] = useState("")
    const [current_ipv6_address, set_current_ipv6_address] = useState("")

    const attach_container = useCallback(
        (node: HTMLDivElement | null) => {
            if (!node) return
            let is_disposed = false

            get_ip().then((ip) => {
                if (is_disposed || !ip) return
                set_current_ipv4_address(ip)
            })
            get_ip("https://6.ident.me").then((ip) => {
                if (is_disposed || !ip) return
                set_current_ipv6_address(ip)
            })

            const i = window.setInterval(() => {
                for (const address of ADDRESS_LIST) {
                    ping_cf({ address, timeout: 5000 }).then((r) => {
                        if (is_disposed || !r) return
                        const prev_cf_response_object = cf_response_object_record_ref.current[address]
                        const cf_response_object_record = { ...cf_response_object_record_ref.current }
                        cf_response_object_record[address] = r
                        set_cf_response_object_record(cf_response_object_record)
                        if (should_notify_map(prev_cf_response_object, r)) {
                            on_cf_response_object_record_change?.(cf_response_object_record)
                        }
                    })
                }
            }, 1000)

            return () => {
                is_disposed = true
                window.clearInterval(i)
            }
        },
        [cf_response_object_record_ref, on_cf_response_object_record_change, set_cf_response_object_record]
    )

    return (
        <div ref={attach_container} className={join_classes("text-center", className)} hidden={hidden}>
            <div className="">
                <Text as="div" variant="title" weight="normal" className="text-2xl">
                    Network Status
                </Text>
                <Clock />
                <Text as="div" variant="title" weight="normal" className="text-xl">
                    {current_ipv4_address || <AnimatedGlowText text="Pending IPV4..." />}
                </Text>
                <Text as="div" variant="title" weight="normal" className="text-xl">
                    {current_ipv6_address || <AnimatedGlowText text="Pending IPV6..." />}
                </Text>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 p-4">
                {ADDRESS_LIST.map((value, index) => {
                    const url = new URL(value)
                    const cf_response_object = cf_response_object_record[value]
                    let ping_state_color = ""
                    if (cf_response_object?.latency) {
                        ping_state_color =
                            cf_response_object.latency <= 200
                                ? "dark:text-green-300 text-green-500"
                                : cf_response_object.latency <= 300
                                  ? "dark:text-yellow-300 text-yellow-500"
                                  : "dark:text-red-300 text-red-500"
                    }
                    return (
                        <div
                            key={index}
                            className="relative flex flex-col justify-center rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl p-2 text-foreground shadow-sm select-none"
                        >
                            <div className="relative w-full h-full overflow-x-hidden">
                                <Text as="div" variant="body" align="left" className="px-2">
                                    {cf_response_object ? (
                                        <>
                                            <span>
                                                {cf_response_object.colo || ""}: {cf_response_object.latency}
                                            </span>
                                            <span>ms</span>
                                        </>
                                    ) : (
                                        <Text tone="destructive">Disconnected</Text>
                                    )}
                                </Text>
                                <Text as="div" variant="caption" align="left" className="px-2">
                                    {url.host.toUpperCase()}
                                </Text>
                                <div
                                    className={`absolute right-2 -top-4 ${ping_state_color} font-bold select-none text-2xl`}
                                >
                                    <AnimatedGlowText text="..." />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { CFChecker }
