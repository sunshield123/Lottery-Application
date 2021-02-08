var mysql = require('mysql');

//Local SQL login credentials

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"Lottery"
});

//create a Mysql Pool

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});



module.exports = db;




