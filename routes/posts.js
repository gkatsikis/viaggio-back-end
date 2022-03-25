import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/', postsCtrl.index)
router.post('/',  checkAuth, postsCtrl.create)


export {
  router
}