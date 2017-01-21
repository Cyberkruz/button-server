import { Router } from 'express'
import { call, receive } from './controller'

const router = new Router()

router.get('/call', call)
router.get('/receive', receive)

export default router
