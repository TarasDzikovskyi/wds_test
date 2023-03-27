const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


const postsRouter = require('./routes/postsRouter');
const authRouter = require('./routes/authRouter');

app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}...`);
});
