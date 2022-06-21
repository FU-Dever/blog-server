const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    fileData: { type: String },
    _userId: { type: String }
});
const PostModel = mongoose.model('postModels', postSchema);

module.exports = { PostModel };