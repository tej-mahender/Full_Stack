//product routes
const exp = require('express');
const productApp = exp.Router();
const expressAsyncHandler=require('express-async-handler')
const {db}=require('mongodb')
productApp.use(exp.json())

//route to get all products
productApp.get('/products',expressAsyncHandler(async (req,res)=>{
    //get product collection obj
    const productCollection=req.app.get('products')
    //get products data from collection of DB
    let productsData=await productCollection.find().toArray();
    res.send({
        message:"all products",
        payload: productsData
    })
}))

//get product bt id
productApp.get('/products/:id',expressAsyncHandler(async(req,res)=>{
   const productCollection=req.app.get('products');
   const productId=Number(req.params.id)
   let productData=await productCollection.findOne({id:productId})
        res.send({
            message:'specific product',
            payload:productData
        })
}))

// productApp.put('/products/:id',(req,res)=>{
//     let id=parseInt(req.params.id);
//     let p=req.body;
//     let index=products.findIndex((product)=>product.id===id);
//     if(index===-1){
//         res.send({
//             message:"product not found",
//         })
//     }
//     else{
//         products[index]=p;
//         res.send({message:"product updated",
//             payload: products
//         })
//     }
// })

// productApp.post('/POSTproduct',(req,res)=>{
//     let p=req.body;
//     products.push(p);
//     res.send({message: "product added",
//         payload: products
//     })
// })

// productApp.delete('/DELETEproduct/:id',(req,res)=>{
//     let id=parseInt(req.params.id);
//     let index=products.findIndex((p)=>p.id===id);
//     if(index===-1){
//         res.send({
//             message:"product not found",
//         })
//     }
//     else{
//         products.splice(index,1);
//         res.send({message:"product deleted",
//             payload: products
//         })
//     }
// })
module.exports = productApp;

{
    
}