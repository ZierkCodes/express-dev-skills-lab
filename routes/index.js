import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Express' })
})

export { 
  router
}
