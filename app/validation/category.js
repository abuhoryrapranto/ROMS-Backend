const Joi = require('joi');

const saveCategoryValidation = Joi.object({
    name: Joi.string()
                .required()
                .label('Category Name'),
                
    status: Joi.number()           
});

const updateCategoryValidation = Joi.object({
    name: Joi.string()
                .label('Category Name'),           
});

module.exports = {
    saveCategoryValidation: saveCategoryValidation,
    updateCategoryValidation : updateCategoryValidation
    
}