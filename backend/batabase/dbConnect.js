const mysql = require("mysql");
// require('dotenv').config();

let connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootroot',
    database: process.env.DB || 'wds'
});

// connection.connect(function(err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//
//     console.log('Connected to the MySQL server!');
// });


module.exports = connection;