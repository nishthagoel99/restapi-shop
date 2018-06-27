var express=require('express');
var app=express();
var bodyParser=require('body-parser');


var productroutes=require('./api/routes/products');
var orderroutes=require('./api/routes/orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


/*/ NORMAL REQUEST: JUST CHECKING APP AND SERVER GET CONNECTED
app.use(function(req,res){
    res.status(200).json({
        message:'connected!'
    });
});
*/
//using product and orders routes

app.use('/products',productroutes);
app.use('/orders',orderroutes);
app.use(function(req,res){
    res.status(404).json({message:'Not found '});
});
//
module.exports=app;