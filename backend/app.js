const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const blogRouter = require('./routes/blogRouter');

app.use("/api/blog", blogRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
});
