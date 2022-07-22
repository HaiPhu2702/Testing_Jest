import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";
import userRoutes from "./src/routes/user.router"


const PORT = 3000;

const app = express();



app.use(bodyParser.json());

const DB_URL = 'mongodb://localhost:27017/Jest';



mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));


app.use('/api/v1', userRoutes);


app.listen(PORT, () => {

    console.log("App running on port: "+ PORT)

})
