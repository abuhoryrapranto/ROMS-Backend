const Joi = require('joi');

let saveOrderValidation = Joi.object({

    order: Joi.array().items({
        menuId: Joi.number()  
            .required()
            .label('Menu name'), 
    
        variant: Joi.string(),

        price: Joi.required()
    }).required(),

    customerName: Joi.string()
                .label('Customer name'),
                
    customerPhone: Joi.string()  
                    .label('Customer phone'),
    
    customerAddress: Joi.string()  
                    .label('Customer address'),
    tableNumber: Joi.number()  
                    .integer() 
                    .label('Table number'),

    deliveryPerson: Joi.string()
                .label('Delivery person'),

});

const orderStatusChangeValidation = Joi.object({
    
    code: Joi.string()
                .required(),
                
    status: Joi.string()  
                .valid('pending','cooking', 'ready', 'served', 'canceled')
                .required()
});

module.exports = {
    saveOrderValidation: saveOrderValidation,
    orderStatusChangeValidation: orderStatusChangeValidation
}