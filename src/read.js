import req from 'request'

export default function read(token, callback) {
    let uri = 'https://developer-api.nest.com'
    let json = true
    let headers = {
        'User-Agent':    'nest-node',
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json'
    }

    req.get({uri, json, headers}, (err, res)=> {
        callback(err, res.body)
    })
}
