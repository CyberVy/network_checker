export type ClockResult = {
    hour: string
    minute: string
    second: string
}

export function get_time():ClockResult{
    const current_time = new Date()
    const hour = current_time.getHours().toString().padStart(2, '0')
    const minute = current_time.getMinutes().toString().padStart(2, '0')
    const second = current_time.getSeconds().toString().padStart(2, '0')

    return  { hour, minute, second }
}
