"use client"

import { CFResponseObject } from "@/core/cf_checker"
import { useEffect, useState } from "react"
import { ping_cf, get_ip } from "@/core/cf_checker"
import { AnimatedGlowText, FloatingModalContainer, useAutoSyncRefAndState } from "@/components"
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

function CFChecker(){
    const [cf_response_object_record_ref, set_cf_response_object_record, cf_response_object_record] = useAutoSyncRefAndState<Record<string, CFResponseObject | undefined>>({})
    const [current_ipv4_address, set_current_ipv4_address] = useState("")
    const [current_ipv6_address, set_current_ipv6_address] = useState("")

    useEffect(() => {
        get_ip().then(ip => {
            if (!ip) return
            
            set_current_ipv4_address(ip)
        })
        get_ip("https://6.ident.me").then(ip => {
            if (!ip) return
            
            set_current_ipv6_address(ip)
        })
    }, [])
    useEffect(() => {
        const i = window.setInterval(() => {
            for (const address of ADDRESS_LIST){
                ping_cf({ address, timeout: 5000 }).then(r => {
                    if (!r) return
                    const cf_response_object_record = { ...cf_response_object_record_ref.current }
                    cf_response_object_record[address] = r
                    set_cf_response_object_record(cf_response_object_record)
                })
            }
        }, 1000)
        return () => window.clearInterval(i)
    }, [])
    return (
        <div className="text-center">

            <div className="text-[#707070]">
                <div className="text-2xl">Network Status</div>
                <Clock/>
                <div className="text-xl">{current_ipv4_address || <AnimatedGlowText text="Pending IPV4..."/>}</div>
                <div className="text-xl">{current_ipv6_address || <AnimatedGlowText text="Pending IPV6..."/>}</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 p-4">
                {ADDRESS_LIST.map((value, index) => {
                    const url = new URL(value)
                    const cf_response_object = cf_response_object_record[value]
                    let ping_state_color = ""
                    if (cf_response_object?.latency){
                        ping_state_color = cf_response_object.latency <= 200 ? "dark:text-green-300 text-green-500" : cf_response_object.latency <= 300 ? "dark:text-yellow-300 text-yellow-500" : "dark:text-red-300 text-red-500"
                    }
                    return (
                        <FloatingModalContainer
                            key={index}
                            className="static! w-auto! h-auto! p-0.5!"
                        >   
                            <div className="relative w-full h-full overflow-x-hidden">
                                <div className="text-sm text-left px-2">
                                    {cf_response_object ? 
                                        <>
                                            <span>
                                                {cf_response_object.colo || ""}: {cf_response_object.latency}
                                            </span>
                                            <span className="text-sm">                 
                                                ms
                                            </span>
                                        </> : <span className={`dark:text-red-500 text-red-700`}>Disconnected</span>}
                                   
                                </div>
                                <div className="text-xs text-left px-2">
                                    {url.host.toUpperCase()}
                                </div>
                                <div className={`absolute right-2 -top-4 ${ping_state_color} font-bold select-none text-2xl`}>
                                    <AnimatedGlowText
                                        text="..."
                                    />
                                </div>
                            </div>
                           
                        </FloatingModalContainer>
                    )
                })}
            </div>
            
        </div>
    )
}

export { CFChecker }