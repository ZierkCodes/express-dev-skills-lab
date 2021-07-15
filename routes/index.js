import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.redirect('/skills')
})

export { 
  router
}
