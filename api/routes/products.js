var express=require('express');
var app=express();
var router=express.Router();


// we use / because already in app.js we have made the app use /products so the route is already defined as /products
router.get('/',function(req,res){
    res.status(200).json({message:'GET request for /products'});
});

router.post('/',function(req,res){
    product={
        name:req.body.name,
        price:req.body.price
    }
    res.status(200).json({
            message:'POST request for /products',
            createdproduct:product
        });
});
/////

//get the id
router.get('/:productid',function(req,res){
    if(req.params.productid=='peace'){
        res.status(200).json({
            message:'You entered the special id',
            productid:req.params.productid
        });
    }else{
        res.status(201).json({
            message:'you entered an id',
        });
    }
});
///patching/update the id
router.patch('/:productid',function(req,res){
        res.status(201).json({
            message:'patched productid',
            productid:req.params.productid
        });
});
//deleting the id
router.delete('/:productid',function(req,res){
        res.status(201).json({
            message:'deleted the productid',
            productid:req.params.productid
        });
});
//

module.exports=router;

