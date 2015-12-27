import req from 'request'

export default function write(token, structure, away, callback) {
    let uri = `https://developer-api.nest.com/structures/${structure}`
    let headers = {
        'User-Agent':    'nest-node',
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json',
        'Content-Type': 'application/json'
    }

    req.put({uri, headers, json: {"away": away}, followAllRedirects: true}, (err, res)=> {
        callback(err, res.body)
    })
}
