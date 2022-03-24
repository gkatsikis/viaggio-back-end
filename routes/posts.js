import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'

const router = Router()

router.get('/',  postsCtrl.index)
router.post('/',  postsCtrl.create)

export {
  router
}