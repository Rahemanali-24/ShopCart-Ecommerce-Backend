const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const  productService  = require("../services/product_service");



function createProduct(req, res) {
  try {
    const response = productService.createProduct(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: ReasonPhrases.CREATED + " Product",
      data: response,
    });
  } catch (err) {
    console.log("something went wrong in create products", err);
  }
}


function getProducts(req,res){
    try{

        const response = productService.getProducts();
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "Successfully fetch the products data",
            data: response,
          });

    }catch(err){
        console.log("something went wrong in getting products", err);
    }
}


function getProduct(req,res){
    try{

        const response = productService.getProduct(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "Successfully fetch the products data",
            data: response,
          });

    }catch(err){
        console.log("something went wrong in getting products", err);
    }
}




module.exports = {
  createProduct,
  getProducts,
  getProduct
};
