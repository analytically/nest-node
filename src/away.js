import req from 'request'

export default function write(params, callback) {
    let uri = `https://developer-api.nest.com/structures/${params.structure_id}`
    let headers = {
        'User-Agent': 'nest-node',
        'Authorization': `Bearer ${params.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    req.put({uri, headers, json: {"away": params.away}, followAllRedirects: true}, (err, res)=> {
        callback(err, res.body)
    })
}