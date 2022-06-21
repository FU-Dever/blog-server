const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { UserModel } = require('../model/userModel');
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const LoggerController = {
    register: async (req, res) => {
        try {
            const user = await UserModel.findOne({ username: req.body.username });
            if (user) {
                return res.status(409).json({ message: 'Username exist!' })
            }

            const hashPassword = bcrypt.hashSync(req.body.password, 10);
            let newUser = new UserModel({
                username: req.body.username,
                password: hashPassword,
                email: req.body.email,
                uri: `https://joeschmoe.io/api/v1/${Math.floor(Math.random() * 100 + 1)}`
            });
            let savedUser = await newUser.save();
            let token = jwt.sign(
                { username: savedUser.username },
                JWT_SECRET
            );
            return res.status(200).json(token);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    login: async (req, res) => {
        try {
            let user = await UserModel.findOne({ username: req.body.username });
            if (!user) {
                return res.status(409).json({ message: 'User not found!' });
            } else {
                const match = bcrypt.compareSync(req.body.password, user.password);
                if (match) {
                    const token = jwt.sign(
                        { username: req.body.username },
                        JWT_SECRET
                    )
                    return res.status(200).json({token: token});
                }
                else {
                    return res.send('Password is invalid!')
                }
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LoggerController;