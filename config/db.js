const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	database: process.env.MYSQL_DATABASE,
	password: process.env.MYSQL_PASSWORD,
});

// let sql = "SELECT * FROM user";
// let sql = "SELECT * FROM posts";
// pool.execute(sql, function (err, result) {
// 	if (err) throw err;
// 
// 	console.log(result);
// });

module.exports = pool.promise();
