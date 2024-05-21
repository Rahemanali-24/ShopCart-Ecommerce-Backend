const express= require('express');

const {getAllCategories,createCategory,destroyCategory} = require('../../controllers/category_controller');



const categoryRouter= express.Router();

categoryRouter.post('/',createCategory);

//get all categories

categoryRouter.get('/',getAllCategories)
categoryRouter.delete('/:id',destroyCategory);



module.exports = categoryRouter;