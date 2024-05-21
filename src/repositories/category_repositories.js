const Category = require('../models/category');

class CategoryRepository {
    async getCategories() {
        try {
            const response = await Category.findAll();
            console.log("Repository getCategories: ", response);
            return response;
        } catch (err) {
            console.error("CategoryRepository getCategories: ", err);
            throw err;  // Throwing the error to be handled by the caller
        }
    }
    async getCategory(id) {
        try {
            const response = await Category.findByPk(id);
            return response;
        } catch (err) {
            console.error("CategoryRepository getCategory: ", err);
            throw err;  // Throwing the error to be handled by the caller
        }
    }
    async createCategory(name, description) {
        try {
            const response = await Category.create({
                name,
                description,
            });
            return response;
        } catch (err) {
            console.error("CategoryRepository createCategory: ", err);
            throw err;  // Throwing the error to be handled by the caller
        }
    }


    async destroyCategory(categoryId){
        try{
            const response = await Category.destroy({
               where:{
                id:categoryId
               }
            });
            return response;
        }catch(err){
            console.log(err);
            
        }
    }
}

module.exports = CategoryRepository;
