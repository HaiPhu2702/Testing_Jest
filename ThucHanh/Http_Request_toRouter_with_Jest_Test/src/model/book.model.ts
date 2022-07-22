import { Schema, model } from "mongoose";


const bookSchema = new Schema({

name: String,

    type: String

})



const BookModel = model('Book', bookSchema);

export { BookModel };