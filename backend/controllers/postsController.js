const connection = require('../batabase/dbConnect')
const util = require('util');
const {v4: uuidv4} = require('uuid');

module.exports.getPosts = async (req, res, next) => {
    try{
        const query = util.promisify(connection.query).bind(connection);

        const rows = await query('Select * from wds.reviews');

        res.status(200).json(rows);
    } catch (e) {
        next(e)
    }
};


module.exports.createPost = async (req, res, next) => {
    try{
        const {Reviewer, Review, Email, Rating, Company, Company_description,Employee,Employees_position} = req.body
        const unique_number = uuidv4();

        const query = util.promisify(connection.query).bind(connection);

        await query(`Insert into wds.reviews values('${Reviewer}', '${unique_number}','${Email}',
        '${Review}', '${Rating}', '${Employee}', '${Employees_position}', '${Company}', '${Company_description}')`);

        const newPost = await query(`Select * from wds.reviews where Unique_employee_number = '${unique_number}'`);

        res.status(200).json(newPost);
    } catch (e) {
        next(e)
    }
};

module.exports.deletePost = async (req, res, next) => {
    try{
        const query = util.promisify(connection.query).bind(connection);

        await query(`Delete from wds.reviews where Unique_employee_number = '${req.params.id}'`);

        res.status(200).json("The post has been deleted...");
    } catch (e) {
        next(e)
    }
};
