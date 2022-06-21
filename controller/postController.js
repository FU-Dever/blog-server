const express = require('express');
const { PostModel} = require('../model/postModel');
const { UserModel } = require('../model/userModel');

const PostController = {
    post: async (req, res) => {
        try {
            const ref = await UserModel.findOne({ username: req.params.username });

            const post = new PostModel({
                title: req.body.title,
                description: req.body.description,
                fileData: req.body.fileData,
                _userId: ref._id
            });

            const savedPost = await post.save();  
            return res.status(200).json(savedPost);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    get: async (req, res) => {
        try {
            const ref = await UserModel.findOne({username: req.params.username});
            const posts = await PostModel.find({ _userId: ref._id });

            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PostController;