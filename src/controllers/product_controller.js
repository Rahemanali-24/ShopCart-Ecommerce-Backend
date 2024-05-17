function createProduct(req,res){

    try{
        return res.json({
            success:true,
            error:{},
            message:"Successfully created a product",
            data:{
                id:Math.random() *(20),
                title:req.body.title,
                description:req.body.description,
                category:req.body.category,
                price:req.body.price,
                image:req.body.image
            },
        });



    }catch(err){
        console.log("something went wrong in create products",err)
    }
}

module.exports = {
    createProduct

};