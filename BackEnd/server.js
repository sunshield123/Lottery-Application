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

const db = require('./demo_db_connection');

const app=express(),
	  bodyParser=require("body-parser");
	  port=3100;



app.use(bodyParser.urlencoded({
	extended:true

}));

app.use(bodyParser.json());

const fake_database=['Mike'];



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

app.post("/newuser",(request,response)=>{
  var sql = "INSERT INTO players (id,player,chance1,chance2,chance3,chance4,chance5) VALUES (6, 'player7',1,2,3,4,5)";
  db.query(sql, function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");

  });
});

app.listen(3100,()=>{
	console.log('server is listening in port 3100')
});





















