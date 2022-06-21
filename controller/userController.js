const { UserModel } = require("../model/userModel")

const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await UserModel.find();
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const user = await UserModel.findOne({username: req.params.username});
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController;