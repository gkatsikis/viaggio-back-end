import { Router } from 'express'
import * as bucketlistsCtrl from '../controllers/bucketlists.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, bucketlistsCtrl.index)
router.post('/', checkAuth, bucketlistsCtrl.create)
router.get('/:id', checkAuth, bucketlistsCtrl.show)
router.put('/:id', checkAuth, bucketlistsCtrl.update)
router.delete('/:id', checkAuth, bucketlistsCtrl.delete)


export {
  router
}