require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    //用.env(放最外層)另外儲存資料庫資訊
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB,
    connectionLimit:10,
    waitForConnections:true,
})

module.exports = pool.promise();