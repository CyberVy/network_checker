export type PingCFParams = {
    address: string
    timeout?: number
}

export type CFResponseObject = {
    colo: string
    uag: string
    loc: string
    warp: string
    ip: string
    latency?: number
}

export async function ping_cf({ address, timeout = 5000 }: PingCFParams): Promise<CFResponseObject | null>{
    const url = new URL(address)
    url.pathname = "/cdn-cgi/trace"

    const timeout_promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(null)
        }, timeout)
    })
    const t_s = Date.now()
    const response = await Promise.race([fetch(url), timeout_promise])
    const latency = Date.now() - t_s

    if (response instanceof Response){
        const cf_response_object = transform_cf_response_text_into_object(await response.text())
        cf_response_object.latency = latency
        return cf_response_object
    }
    else {
        return null
    }
}

function transform_cf_response_text_into_object(text: string){
    const text_list = text.split("\n")
    const obj = {} as CFResponseObject
    for (const item of text_list){
        const [key, value] = item.split("=")
        if (key === "ip" || key === "colo" || key === "uag" || key === "loc" || key === "warp"){
            obj[key] = value
        }
    }
    return obj
}

export async function get_ip(api = "https://4.ident.me/"){
    return fetch(api).then(r => r.text()).catch(() => {})
}

// ping_cf({ address: "https://cdn.xsolutiontech.com/" }).then(console.log)
// get_ip().then(console.log)