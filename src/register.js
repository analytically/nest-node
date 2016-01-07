
export default function register(callback) {
    let client_id = process.env.NEST_CLIENT_ID

    if (typeof client_id === 'undefined') {
        callback(Error('missing process.env.NEST_CLIENT_ID'))
    }
    else {
        let url = 'https://home.nest.com/login/oauth2'
        let query = `?client_id=${client_id}`
        callback(null, `${url}${query}`)
    }
}
