import { Router } from 'express'
import * as listItemsCtrl from '../controllers/listItems.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, listItemsCtrl.index)
router.post('/', checkAuth, listItemsCtrl.create)
router.get('/:id', checkAuth, listItemsCtrl.show)
router.put('/:id', checkAuth, listItemsCtrl.update)
router.delete('/:id', checkAuth, listItemsCtrl.delete)


export {
  router
}