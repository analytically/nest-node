import env from 'node-env-file'
import path from 'path'
import test from 'tape'
import nest from '../src/index'

var util = require('util')

// if we're in dev grab env vars from .env
let mode = process.env.NODE_ENV
let isDev = typeof mode === 'undefined' || mode === 'development'
if (isDev) {
    env(path.join(process.cwd(), '.env'))
    console.log('ENV loading isDev')
}
else {
    console.log('ENV loading ! isDev')
}

test('sanity', t=> {
    t.plan(1)
    t.ok(nest, 'there is a fa')
    console.log(nest.describe)
    t.end()
})

test('can register', t=> {
    t.plan(1)
    nest.register((err, link)=> {
        if (err) {
            t.fail(err, err)
        }
        else {
            t.ok(link, 'got a link to register')
            console.log(link)
        }
        t.end()
    })
})

test('get access token with code', t=> {
    if (process.env.TOKEN) {
        t.plan(1)
        t.ok(process.env.TOKEN, 'got a token')
        console.log(process.env.TOKEN)
        t.end()
    }
    else {
        let code = 'ZD9K6BL4BUA8LCS2'
        t.plan(1)
        nest.token(code, (err, token)=> {
            if (err) {
                t.fail(err, err)
                console.error(err)
            }
            else {
                t.ok(token, 'got a token')
                console.log(token)
            }
            t.end()
        })
    }
})

test('can read', t=> {
    t.plan(1)
    nest.read(process.env.TOKEN, (err, obj)=> {
        if (err) {
            t.fail(err, err)
        }
        else {
            t.ok(obj, 'got the single object')
            console.log(obj)
        }
        t.end()
    })
})

test('can set away', t=> {
    t.plan(1)
    nest.read(process.env.TOKEN, (err, obj)=> {
        if (err) {
            t.fail(err, err)
        }
        else {
            var structures = Object.keys(obj.structures)
            structures.forEach(function(structure) {
                nest.setAway({token: process.env.TOKEN, structure_id: structure.id, away: "home"}, (err, obj)=> {
                    if (err) {
                        t.fail(err, err)
                    }
                    else {
                        t.ok(obj, 'could write')
                        console.log(util.inspect(obj, false, null));
                    }
                    t.end()
                })
            })
        }
    })
})