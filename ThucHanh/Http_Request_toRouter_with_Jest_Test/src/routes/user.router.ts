import express from 'express';

const router = express.Router();

import  {UserController} from "../controller/user.controller"



router.post('/register',UserController.createUser);



export default router;