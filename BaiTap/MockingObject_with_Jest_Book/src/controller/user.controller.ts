import {UserModel} from "../model/user.model";

export class UserController {
    static async createUser(req, res, next) {
        try {
            const userNew = new UserModel(req.body);
            await userNew.save();
            res.status(200).json({username: userNew.username});

        } catch (err) {
            next(err)
        }
    }


}
