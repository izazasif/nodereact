var express = require("express");
var cors = require("cors");
var app = express();
var mysql = require('mysql');
var bodyParser 	= require('body-parser');
var multer = require("multer");
var path = require('path');
// var upload = multer({ dest: 'uploads/' })
// const { request, response } = require("express");


var db = mysql.createPool({
     host:'localhost',
    user : 'root',
    password : '',
    database : 'cruddatabase',

})

var storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, productsImage, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(productsImage.originalname));
    }
 });
 
 var upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 });

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
app.delete("/api/delete/:movieName",(request,response)=>{
    var name = request.params.movieName;
    var sql = "DELETE FROM movie_review WHERE movieName= ?";
    
    db.query(sql,name,function(err,result){
        if(err)
        {
            console.log(err);  
        }
        else
        console.log(result);
            
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
app.post("/api/service/insert",upload.single('productsImage'),function(request,response){
     var fileName= request.file.filename;
    var productName = request.body.productName;
    var productPrice= request.body.productPrice;
    var productDescription = request.body.productDescription;
    var productsType= request.body.productsType;
    var productsImage= fileName;
    
    var sql = "INSERT INTO products (productName,productPrice,productDescription,productsType,productsImage) VALUES (?,?,?,?,?)";
    db.query(sql,[productName,productPrice,productDescription,productsType,productsImage],function(err,result){
    if(err)
    {
        response.send(err);  
    }
    else
    response.send(result);
        
    }); 

})
app.get("/api/home/get",function(request,response){
    var sql= "select * from products";
    db.query(sql,function(err,result){
        if(err)
        {
            response.send(err); 
        }
        else {
            response.send(result);
        }
    })
})

app.listen(3001,function()
{
   console.log("ServerStart at 3001");
})
