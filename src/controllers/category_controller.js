const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const CategoryService = require('../services/category_service');
const CategoryRepository = require('../repositories/category_repositories'); // Correct import

const categoryService = new CategoryService(new CategoryRepository());


async function createCategory(req,res){
    try{

        const response = await categoryService.createCategory(req.body);

        return res.status(StatusCodes.CREATED).json({
            success:true,
            error:{},
            message:ReasonPhrases.CREATED+" Category",
            data:response
        });

    }catch(error){
        console.log('something went wrong',error);
        return res
        .status(error.statusCode)
        .json(errorResponse(error.reason, error));
    }
}


async function getAllCategories(req,res){
    try{
        const response = categoryService.getAllCategories();
        console.log("response is "+response.body);
        return res
        .status(StatusCodes.OK)
        .json({
            success: true,
            error: {},
            message: "Successfully fetched Categories",
            data: response
    });
    }catch(err){
        console.log("getting error for get Category");
        res.status(400).json({message:"getCategory api not working"});
    }
}


module.exports = {
    createCategory,
    getAllCategories,

}