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



var Input={}
var current_id=0;
app.set("view egnine","ejs");


app.get("/",(request,response)=>{

	response.json('Test');

});

// Get request is executed here - Where all records from the Database retervied

app.get("/Users",(request,response)=>{	
  	db.query("SELECT * FROM players", function (err, result) {
      if (err) throw err;
      response.send(result);

  });
});

//Post Function where the last record from the database is fetched 

// and also the the current record is inserted in to database
/**/
app.post("/ping", function (req, res) {
      this.Input=req.body;
      var sql = "select id from players ORDER BY id DESC LIMIT 1;"; /*last id in the database*/
      db.query(sql, function (err, result) {
         if (err) throw err;

         this.current_id=result[0].id+1;
         Insert(this.current_id)
      });
      /* Data is inserted in to the database*/
    function Insert(input){
      var sql = "INSERT INTO players (id,chance1,chance2,chance3,chance4,chance5,date,TimeStamp) VALUES ('" + input + "','" +this.Input.chance1+ "','" +this.Input.chance2+ "','" +this.Input.chance3+ "','" +this.Input.chance4+ "','" +this.Input.chance5+ "','" +this.Input.date+ "','" +this.Input.TimeStamp+ "')";
        db.query(sql, function (err, result) {
       if (err) throw err;
      });
      }

}) 

app.listen(3200,()=>{
	console.log('server is listening in port 3200')
});





















