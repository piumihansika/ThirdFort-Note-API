var mysql=require('mysql')

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thirdfort_noteapi'
});
dbConn.connect();

module.exports = dbConn;