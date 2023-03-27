const CryptoJS = require('crypto-js');
const {userNormalizator} = require("../utils/userUtil");
const util = require("util");
const connection = require("../batabase/dbConnect");
require('dotenv').config();

module.exports.login = async (req, res, next) => {
    try {
        const query = util.promisify(connection.query).bind(connection);
        const user = await query(`Select * from wds.users where email='${req.body.email}'`);

        if(!user) return res.status(401).json("Wrong username or password!");

        const bytes = CryptoJS.AES.decrypt(user[0].password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) return res.status(401).json("Wrong username or password!");

        res.status(200).json({user: userNormalizator(user)})
    } catch (e) {
        next(e);
    }
}
