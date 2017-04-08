module.exports = (route) => {
    console.log('route', route)
    return route.reduce((crt, nxt) => {

        console.log('nxt.lat', nxt.lat)
        console.log('nxt.lng', nxt.lng)
        console.log('crt', crt)
        console.log('crt.length', crt.length)
        console.log('crt[0]', crt[0])
        console.log('crt[1]', crt[1])
        console.log('isArray', Array.isArray(crt))
        console.log('typeof', typeof crt)
        let toPush = [ nxt.lat, nxt.lng ]
        console.log('toPush', toPush)
        let newCrt = crt.push(toPush)
        console.log('newCrt', newCrt)
        return newCrt
    }, [])
}
