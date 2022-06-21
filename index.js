const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const postRoute = require('./routes/postRouter');
const loggerRouter = require('./routes/loggerRouter');
const userRoute = require('./routes/userRouter');

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log('Connecting to database...');
});

app.use("/auth", loggerRouter);
app.use("/home", postRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log('Listening on port: ' + process.env.PORT);
})