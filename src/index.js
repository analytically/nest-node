import register from './register'
import token from './token'
import read from './read'
import setAway from './set_away'
import setTargetTempC from './set_target_temp_c'
import setTargetTempF from './set_target_temp_f'

let describe = `
  nest
    describe
    register((err, link)=>)
    token(code, (err, token)=>)
    read(token, (err, obj)=>)
    setAway(params, (err, obj)=>)
    setTargetTempC(params, (err, obj)=>)
    setTargetTempF(params, (err, obj)=>)
`

export default {
    describe,
    token,
    register,
    read,
    setAway,
    setTargetTempC,
    setTargetTempF
}