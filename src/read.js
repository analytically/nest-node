import req from 'request'

export default function read(token, callback) {
    let url = 'https://developer-api.nest.com'
    let json = true
    let headers = {
        'User-Agent':    'nest-node',
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json'
    }

    req.get({url, json, headers, timeout: 60000}, (err, res)=> {
        callback(err, res.body)
    })
}
