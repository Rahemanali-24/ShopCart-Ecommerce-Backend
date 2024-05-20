const express= require('express');

const {getAllCategories,createCategory} = require('../../controllers/category_controller');



const categoryRouter= express.Router();

categoryRouter.post('/',createCategory);

//get all categories

categoryRouter.get('/',getAllCategories)



module.exports = categoryRouter;