import axios from 'axios'
import express from 'express'
import bodyParser from 'body-parser'
import queryString from 'query-string'
// const jwt = require('express-jwt')
// const jsonwebtoken = require('jsonwebtoken')

const app = express()

import routes from './controllers'

app.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

app.use('/', routes({ config: 'foo' }))

app.use((req, res, next) => {
  const { body } = res
  const respond = typeof body === 'object' ? body : { message: body }
  if (body)
    res.status(res.statusCode).send({
      ok: true,
      respond,
    })
  else res.sendStatus(res.statusCode)
})
app.use((err, req, res, next) => {
  const { message: error } = err
  console.error('ERR MW', err)
  const status = res.statusCode === 200 ? 500 : res.statusCode
  res.status(status).send({
    ok: false,
    error,
  })
})

module.exports = {
  path: '/api',
  handler: app,
}
