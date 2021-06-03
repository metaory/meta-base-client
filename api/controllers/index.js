import { Router } from 'express'
import user from './user'

export default ({ config }) => {
  const ca = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next))
      .then(next)
      .catch(next)

  const _ = Router()
  _.use('/user', user({ config, ca }))

  return _
}
