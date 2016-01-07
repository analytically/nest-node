import register from './register'
import token from './token'
import read from './read'
import away from './away'

let describe = `
  nest
    describe
    register((err, link)=>)
    token(code, (err, token)=>)
    read(token, (err, obj)=>)
    away(token, structure_id, away, (err, obj)=>)
`

export default {
    describe,
    token,
    register,
    read,
    away
}