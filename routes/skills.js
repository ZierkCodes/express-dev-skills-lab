import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

router.get('/', skillsCtrl.findAll)
router.post('/add', skillsCtrl.createSkill)
router.get('/:id', skillsCtrl.findById)
router.put('/update/:id', skillsCtrl.updateById)
router.delete('/:id', skillsCtrl.removeById)

export {
  router
}
