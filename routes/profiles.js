import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
// router.get('/', profilesCtrl.index)
router.get('/:id', profilesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
