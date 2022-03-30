import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinations.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.post('/', checkAuth, destinationsCtrl.create)

export {
  router,
}