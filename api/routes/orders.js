var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
    res.status(200).json({
        message:'GET request for /orders'
    });
});

router.post('/',function(req,res){
    var order={
        quantity:req.body.quantity,
        id:req.body.id
    }
    res.status(200).json({
        message:'POST  request for /orders',
        order:order
    });
});

router.get('/:orderid',function(req,res){
    if(req.params.orderid=='peaceful'){
        res.status(200).json({
            message:'GET REQUEST OF SPECIAL ORDER ID ',
            orderid:req.params.orderid
        });
    }else{
        res.status(201).json({
            message:'GET REQUEST OF ORDER ID'
        });
    }
});

router.delete('/:orderid',function(req,res){
    res.status(200).json({
        message:'DELETE for /orderid'
    });
});

module.exports=router;