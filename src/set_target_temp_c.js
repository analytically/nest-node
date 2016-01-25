import req from 'request'

export default function write(params, callback) {
    let uri = `https://developer-api.nest.com/devices/thermostats/${params.thermostat_id}?auth=${params.token}`
    let headers = {
        'User-Agent': 'nest-node',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    req.put({uri, headers, json: {"target_temperature_c": params.target_temperature_c}, followAllRedirects: true, timeout: 60000}, (err, res)=> {
        callback(err, res.body)
    })
}