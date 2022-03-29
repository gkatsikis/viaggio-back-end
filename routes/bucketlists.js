import { Router } from 'express'
import * as bucketlistsCtrl from '../controllers/bucketlists.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', bucketlistsCtrl.index)
router.post('/', bucketlistsCtrl.create)
// router.get('/:id', bucketlistsCtrl.show)
// router.put('/:id', bucketlistsCtrl.update)
// router.delete('/:id', bucketlistsCtrl.delete)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export {
  router
}