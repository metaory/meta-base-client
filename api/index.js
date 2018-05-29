const Axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const queryString = require('query-string')
// const cookieParser = require('cookie-parser')
// const jwt = require('express-jwt')
// const jsonwebtoken = require('jsonwebtoken')

const _ = express.Router()
const app = express()
// app.use(cookieParser())
// app.use(bodyParser.json())
// app.use(function (req, res, next) {
//   console.log('<1> Time:', Date.now(), req.url)
//   console.log(1, res.body)
//   next()
//   console.log('<2> Time:', Date.now(), req.url)
//   console.log(2, res.body)
// })
_.use((req, res, next) => {
  console.log('_.USE')
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
_.post('/auth/init', (req, res, next) => {
  console.log('REQ.BODY', req.body)
  // req.session.appToken = { username: 'demo' }
  // req.session.save()
  return res.json({ username: 'demo' })
})

_.get('/foo', (req, res, next) => {
  res.body = { ok: true, message: 'from FooBar!' }
  next()
})

_.use(function(req, res, next) {
  console.log('RES')
  res.body.xorg = 'foobar'
  res.send(res.body)
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api',
  handler: _,
}
