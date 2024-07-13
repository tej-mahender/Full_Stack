//product routes
const exp = require('express');
const productApp = exp.Router();

productApp.use(exp.json())

let products=[
    {id:1,name:"mobile",price:10000},
    {id:2,name:"laptop",price:20000},
    {id:3,name:"refrigerator",price:50000}
]

productApp.get('/GETproducts',(req,res)=>{
    res.send({
        message:"all products",
        payload: products
    })
})

productApp.get('/GETproduct/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let p=products.find((p)=>p.id===id);
    if(p===undefined){
        res.send({
            message:"product not found",
        })
    }
    else{
        res.send({
            message:'specific product',
            payload:p
        })
    }
})

productApp.put('/PUTproduct/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let p=req.body;
    let index=products.findIndex((product)=>product.id===id);
    if(index===-1){
        res.send({
            message:"product not found",
        })
    }
    else{
        products[index]=p;
        res.send({message:"product updated",
            payload: products
        })
    }
})

productApp.post('/POSTproduct',(req,res)=>{
    let p=req.body;
    products.push(p);
    res.send({message: "product added",
        payload: products
    })
})

productApp.delete('/DELETEproduct/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let index=products.findIndex((p)=>p.id===id);
    if(index===-1){
        res.send({
            message:"product not found",
        })
    }
    else{
        products.splice(index,1);
        res.send({message:"product deleted",
            payload: products
        })
    }
})
module.exports = productApp;