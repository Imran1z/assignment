import express from 'express'
import { getUsers, signin,signOut,signup } from '../Controllers/auth.controller.js';


const router =express.Router();

router.get('/getuser',getUsers)
router.post('/signup',signup)
router.post('/signin',signin)
router.get('/signout',signOut)

export default router