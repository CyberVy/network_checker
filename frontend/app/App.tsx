import { useState } from "react"
import { Activity, Map as MapIcon } from "lucide-react"
import type { CFResponseObject } from "@core/cf_checker"
import { LaunchAnimation } from "@/blocks/LaunchAnimation"
import { CFChecker } from "@/blocks/CFChecker"
import { Map } from "@/blocks/Map/Map"
import { ViewSwitcher } from "@/components"

type ActiveView = "status" | "map"

export default function App() {
    const [active_view, set_active_view] = useState<ActiveView>("status")
    const [show_launch_animation, set_show_launch_animation] = useState(true)
    const [cf_response_object_record, set_cf_response_object_record] = useState<
        Record<string, CFResponseObject | undefined>
    >({})

    return (
        <>
            <div className="select-none" {...(show_launch_animation ? { inert: true } : {})}>
                <ViewSwitcher<ActiveView>
                    id="network_checker_view_switcher"
                    className="select-none"
                    toolbar_layout="bottom-floating"
                    toolbar_hidden={show_launch_animation}
                    active_view_id={active_view}
                    on_view_change={set_active_view}
                    keep_alive_default={true}
                    views={[
                        {
                            id: "status",
                            icon: <Activity className="size-5" />,
                            label: "Status",
                            content: <CFChecker on_cf_response_object_record_change={set_cf_response_object_record} />
                        },
                        {
                            id: "map",
                            icon: <MapIcon className="size-5" />,
                            label: "Map",
                            keep_alive: true,
                            swipe_enabled: false,
                            overscroll_enabled: false,
                            content: (
                                <div className="h-[calc(100dvh-env(safe-area-inset-top))] w-full overflow-hidden">
                                    <Map
                                        className="h-full w-full"
                                        cf_response_object_record={cf_response_object_record}
                                    />
                                </div>
                            )
                        }
                    ]}
                />
            </div>

            {show_launch_animation && <LaunchAnimation on_finish={() => set_show_launch_animation(false)} />}
        </>
    )
}
