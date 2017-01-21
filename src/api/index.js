import { Router } from 'express'
import phone from './phone'

const router = new Router()

router.use('/phone', phone)

export default router
