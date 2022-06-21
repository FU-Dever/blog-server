const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    uri: { type: String }
});
const UserModel = mongoose.model('usersList', userSchema);
module.exports = { UserModel };