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
        <div
            ref={attach_container}
            className={join_classes("mx-auto w-full max-w-6xl px-4 pb-28 pt-6", className)}
            hidden={hidden}
        >
            <section
                aria-label="Network status and IP addresses"
                className="mb-8 rounded-2xl border border-ui-border bg-ui-surface p-4 shadow-sm backdrop-blur-xl"
            >
                <div className="flex items-center justify-between gap-3">
                    <Text as="div" variant="title" weight="semibold" className="text-xl">
                        Network Status
                    </Text>
                    <Clock className="text-2xl" />
                </div>
                <div className="my-3 border-t border-ui-border" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="min-w-0">
                        <Text as="div" variant="caption" tone="secondary" className="mb-1">
                            IPv4 ADDRESS
                        </Text>
                        <Text as="div" variant="body" mono className="break-all text-base">
                            {current_ipv4_address || <AnimatedGlowText text="Pending..." />}
                        </Text>
                    </div>
                    <div className="min-w-0">
                        <Text as="div" variant="caption" tone="secondary" className="mb-1">
                            IPv6 ADDRESS
                        </Text>
                        <Text as="div" variant="body" mono className="break-all text-base">
                            {current_ipv6_address || <AnimatedGlowText text="Pending..." />}
                        </Text>
                    </div>
                </div>
            </section>

            <section aria-label="Network nodes">
                <div className="mb-3 flex items-center justify-between px-1">
                    <Text as="div" variant="body" weight="medium">
                        Network Nodes
                    </Text>
                    <Text as="div" variant="caption" tone="secondary" mono>
                        {Object.values(cf_response_object_record).filter(Boolean).length}/{ADDRESS_LIST.length} online
                    </Text>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {ADDRESS_LIST.map((value) => {
                        const url = new URL(value)
                        const cf_response_object = cf_response_object_record[value]
                        const latency = cf_response_object?.latency
                        const ping_state_color =
                            latency === undefined
                                ? "text-ui-label-tertiary"
                                : latency <= 200
                                  ? "text-green-500 dark:text-green-300"
                                  : latency <= 300
                                    ? "text-yellow-500 dark:text-yellow-300"
                                    : "text-red-500 dark:text-red-300"
                        return (
                            <div
                                key={value}
                                className="flex min-h-28 min-w-0 flex-col justify-between rounded-2xl border border-ui-border bg-ui-surface p-3 shadow-sm backdrop-blur-xl"
                            >
                                <div className="relative flex min-w-0 items-center justify-between gap-2">
                                    <Text as="div" variant="caption" tone="secondary" className="truncate">
                                        {url.host.toUpperCase()}
                                    </Text>
                                    <div
                                        aria-label="Ping indicator"
                                        className={`shrink-0 font-bold text-2xl leading-none select-none ${ping_state_color}`}
                                    >
                                        <AnimatedGlowText text="..." />
                                    </div>
                                </div>
                                {cf_response_object ? (
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <Text as="span" variant="title" weight="semibold" mono className="text-2xl">
                                            {cf_response_object.latency}
                                        </Text>
                                        <Text as="span" variant="caption" tone="secondary">
                                            ms
                                        </Text>
                                    </div>
                                ) : (
                                    <Text as="div" variant="body" tone="secondary" className="mt-3">
                                        <AnimatedGlowText text="Connecting..." />
                                    </Text>
                                )}
                                {cf_response_object?.colo && (
                                    <Text as="div" variant="caption" tone="secondary" className="mt-1">
                                        {cf_response_object.colo}
                                    </Text>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export { CFChecker }
