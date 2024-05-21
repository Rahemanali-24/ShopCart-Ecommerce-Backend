const express= require('express');

const {getAllCategories,createCategory,destroyCategory,destroyAllCategory,updateCategory} = require('../../controllers/category_controller');



const categoryRouter= express.Router();
categoryRouter.post('/',createCategory);

//get all categories
categoryRouter.get('/',getAllCategories);

categoryRouter.delete('/:id',destroyCategory);
categoryRouter.delete('/',destroyAllCategory);

categoryRouter.put('/:id',updateCategory);



module.exports = categoryRouter;