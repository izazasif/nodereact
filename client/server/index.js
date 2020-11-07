var express = require("express");
var cors = require("cors");
var app = express();
var mysql = require('mysql');
var bodyParser 	= require('body-parser');
const { request, response } = require("express");

var db = mysql.createPool({
     host:'localhost',
    user : 'root',
    password : '',
    database : 'cruddatabase',

})


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/api/get",function(request,response){

    var sql = "select * from movie_review";
    db.query(sql,function(err,result){
    if(err)
    {
        response.send(err);  
    }
    else
    response.send(result);
        
    });

})

app.post("/api/insert",function(request,response){
    var movieName = request.body.movieName;
    var movieReview= request.body.movieReview;
    var sql = "INSERT INTO movie_review (movieName,movieReview) VALUES (?,?)";
    db.query(sql,[movieName,movieReview],function(err,result){
    if(err)
    {
        response.send(err);  
    }
    else
    response.send("SUCCESS");
        
    });
   
});
app.delete("/api/delete/:movieName",function(request,response){
    var name = request.params.movieName;
    var sql = "DELETE FROM movie_review WHERE movieName=?";
    
    db.query(sql,[1],function(err,result){
        if(err)
        {
            console.log(err);  
        }
        else
        console.log(result.affectedRows)
            
        });

});

app.put("/api/update",function(request,response){
    var name = request.body.movieName;
    var reviw= request.body.movieReview;
    var sql = "UPDATE movie_review SET movieReview=? where movieName= ?";
    db.query(sql,[reviw,name],function(err,result){
        if(err)
        {
            console.log(err);  
        }
        else
        response.send("SUCCESS");
            
        });

});

app.listen(3001,function()
{
   console.log("ServerStart at 3001");
})
