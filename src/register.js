
export default function register(callback) {
    let app = process.env.NEST_CLIENT_ID
    if (typeof app === 'undefined') {
        callback(Error('missing process.env.nest_CLIENT_ID'))
    }
    else {
        let url = 'https://home.nest.com/login/oauth2'
        let query = `?client_id=${app}&state=FOO`
        callback(null, `${url}${query}`)
    }
}
