const Joi = require('joi');

const validateData = Joi.object({
    customerName: Joi.string()
                .label('Customer name'),
                
    customerPhone: Joi.string()  
                    .label('Customer phone'),
    
    customerAddress: Joi.string()  
                    .label('Customer address'),

    menuId: Joi.number()  
            .required()
            .label('Menu name'), 
    
    variant: Joi.string(),

    price: Joi.required()
});

let saveOrderValidation = Joi.array().items(validateData);

module.exports = {
    saveOrderValidation: saveOrderValidation
}