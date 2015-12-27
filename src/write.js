import req from 'request'

export default function write(token, obj, callback) {
    let uri = 'https://developer-api.nest.com'
    let headers = {
        'User-Agent':    'nest-node',
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json',
        'Content-Type': 'application/json'
    }

    req.put({uri, headers, json: obj, followAllRedirects: true}, (err, res)=> {
        callback(err, res.body)
    })
}
