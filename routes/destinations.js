import { Router } from 'express'
import * as destCtrl from '../controllers/destinations'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.post('/', checkAuth, destCtrl.create)