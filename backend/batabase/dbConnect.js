const mysql = require("mysql");
require('dotenv').config();

let connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootroot',
    database: process.env.DB || 'wds'
});

module.exports = connection;