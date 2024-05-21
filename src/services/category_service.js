class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }

    async createCategory(category) {
        try {
            const response = await this.repository.createCategory(category.name, category.description);
            return response;
        } catch (error) {
            console.error("CategoryService createCategory: ", error);
            throw error;  // Throwing the error to be handled by the caller
        }
    }

    async getAllCategories() {
        try {
            const response = await this.repository.getCategories();
            return response;
        } catch (error) {
            console.error("CategoryService getAllCategories: ", error);
            throw error;  // Throwing the error to be handled by the caller
        }
    }

    async getCategory(categoryId){
        const response = await this.repository.getCategory(categoryId);
        return response;
    }


    async destroyCategory(categoryId){
        const response = await this.repository.destroyCategory(categoryId);
        return response;
    }

    async destroyAllCategory(){
        const response = await this.repository.destroyAllCategory();
        return response;
    }

    async updateCategory(categoryId,details){
        const response = await this.repository.updateCategory(categoryId,details);
        return response;
    }
}

module.exports = CategoryService;
