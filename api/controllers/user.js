import { Router } from 'express'

export default ({ config } = {}) => {
  const _ = Router()
  _.get('/user-attributes', async (req, res, next) => {
    res.body = { userType: 't_x1' }
    next()
  })
  return _
}
