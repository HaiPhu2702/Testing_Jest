import express from 'express';

const router = express.Router();

import  {BookController} from "../controller/book.controller"



router.post('/createBook',BookController.createBook);



export default router;