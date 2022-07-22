import {BookModel} from "../model/book.model";

export class BookController {
    static async createBook(req, res, next) {
        try {
            const BookNew = new BookModel(req.body);
            await BookNew.save();
            res.status(200).json({name: BookNew.name});

        } catch (err) {
            next(err)
        }
    }


}
