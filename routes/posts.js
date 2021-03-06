import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/',  checkAuth, postsCtrl.create)
router.get('/:id', checkAuth, postsCtrl.show)
router.put('/:id', checkAuth, postsCtrl.update)
router.delete('/:id', checkAuth, postsCtrl.delete)

//comments
router.post('/:id/comments', checkAuth, postsCtrl.createComment)
router.delete('/:postId/comments/:commentId', checkAuth, postsCtrl.deleteComment)
router.put('/:postId/comments/:commentId', checkAuth, postsCtrl.updateComment)

export {
  router
}