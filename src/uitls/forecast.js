const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e29c10fbdd4a97929a6418b766e351ec&query=${lat},${long}&units=m`
    request({
        url,
        json: true,
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current["weather_descriptions"][0]}. It is currently ${body.current["temperature"]} Degree out. It feels like ${body.current["feelslike"]} Degree out.`)
        }
    })
}

module.exports = forecast