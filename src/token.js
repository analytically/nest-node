import req from 'request'

export default function token(code, callback) {
    let url = 'https://api.home.nest.com/oauth2/access_token'
    let client_id = process.env.NEST_CLIENT_ID
    let client_secret = process.env.NEST_CLIENT_SECRET

    let headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    let form = {code, "client_id": client_id, "client_secret": client_secret, grant_type: "authorization_code"}
    let query = {url, headers, "form": form}

    req.post(query, (err, res)=> {
        if (err) {
            callback(err)
        }
        else if (res.body.error) {
            callback(Error(res.body.error))
        }
        else {
            // Nest API responds with JSON
            callback(null, JSON.parse(res.body))
        }
    })
}
