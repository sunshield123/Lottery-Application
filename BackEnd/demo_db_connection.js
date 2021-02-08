var mysql = require('mysql');



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






  // var sql = "INSERT INTO players (id,player,chance1,chance2,chance3,chance4,chance5) VALUES (5, 'player6',1,2,3,4,5)";
  // db.query(sql, function (err, result) {
  //  if (err) throw err;
  //  console.log("1 record inserted");
  // });


//   db.query("SELECT * FROM players", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

module.exports = db;




