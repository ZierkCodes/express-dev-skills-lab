import { response, Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'


router.get('/', skillsCtrl.findAll)
router.post('/add', skillsCtrl.createSkill, skillsCtrl.findAll)
router.get('/:id', skillsCtrl.findById)
router.put('/:id', skillsCtrl.updateById, skillsCtrl.findAll)
router.delete('/:id', skillsCtrl.removeById)

export {
  router
}
