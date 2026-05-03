export function get_coords(){
    const promise = new Promise<[number, number]>(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve([position.coords.latitude, position.coords.longitude])
        })
    })
    return promise
}
