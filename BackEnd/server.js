//I want to give my Own Input to Database
//


// To be completed
// 1) To query string with our own hardcoded value
// 2) To retrevie the Whole table from the Database

// Push request - 1) To query string with our own hardcoded value
//Get request -  2) To retrevie the Whole table from the Database

// How to

// How to connect both Node js and Angular JS

// 1)Pass Data to front end 
// 2) How to get values from the Front ENd





const express=require('express');
const cors = require('cors');

const db = require('./demo_db_connection');

const app=express(),
	  bodyParser=require("body-parser");
	  port=3200;

app.use(cors())

app.use(bodyParser.urlencoded({
	extended:true

}));

app.use(bodyParser.json());

const fake_database=['Mike'];

var Input={}

app.set("view egnine","ejs");


app.get("/",(request,response)=>{

	response.json('rick');

});

app.get("/Users",(request,response)=>{

	
	db.query("SELECT * FROM players", function (err, result) {
    if (err) throw err;
    console.log("i am inside server")
    console.log(result);
    response.send(result);

});


});

// app.post("/newuser",(request,response)=>{
//   var sql = "INSERT INTO players (id,player,chance1,chance2,chance3,chance4,chance5) VALUES (6, 'player7',1,2,3,4,5)";
//   db.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("1 record inserted");

//   });
// });

app.post("/ping", function (req, res) {
  // res.send(req.body)
  console.log(req.body);
  this.Input=req.body;
  console.log("entering the sql");
  console.log(this.Input.id);
// this.Input.id,this.Input.player,this.Input.chance1,this.Input.chance2,this.Input.chance3,this.Input.chance4,this.Input.chance5
console.log(this.Input.id)
console.log(this.Input.player)
console.log(this.Input.chance1)
console.log(this.Input.chance2)
console.log(this.Input.chance3)
console.log(this.Input.chance4)
console.log(this.Input.chance5)
var id=8
var player="player8"

  var sql = "INSERT INTO players (id,player,chance1,chance2,chance3,chance4,chance5) VALUES ('" +this.Input.id+ "','" +this.Input.player+ "','" +this.Input.chance1+ "','" +this.Input.chance2+ "','" +this.Input.chance3+ "','" +this.Input.chance4+ "','" +this.Input.chance5+ "')";
    db.query(sql, function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");

  });

}) 

app.listen(3200,()=>{
	console.log('server is listening in port 3200')
});





















