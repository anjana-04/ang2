var express=require('express')
var bodyparser=require('body-parser')
const app=express()
app.use(function (req, res, next) {

    

    res.setHeader('Access-Control-Allow-Origin', '*');



  

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');



  

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



   

    res.setHeader('Access-Control-Allow-Credentials', true);



    

    next();

});
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.get("/data",function(req,res){
    res.send([{name:"arun",sal:8000},{name:"ar",sal:9000}])
})
app.listen(8000,function(req,res){
    console.log("stat")
})