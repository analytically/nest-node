import req from 'request'

export default function write(params, callback) {
    let uri = `https://developer-api.nest.com/structures/${params.structure_id}?auth=${params.token}`
    let headers = {
        'User-Agent': 'nest-node',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    req.put({uri, headers, json: {"away": params.away}, followAllRedirects: true, timeout: 60000}, (err, res)=> {
        callback(err, res.body)
    })
}