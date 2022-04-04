const Joi = require('joi');

const saveMenuValidation = Joi.object({
    name: Joi.string()
                .required()
                .label('Menu Name'),

    categoryId: Joi.number(),
    
    variants: Joi.string()
                .label('Variants'),

    mainPrice: Joi.number()
                    .required()
                    .label('Main Price'),

    offerPrice: Joi.number()
                    .allow(null)
                    .label('Offer Price'),
    
    type: Joi.string()
                .valid('regular', 'addon')
                .required()
                .label('Menu Type'),
                
    status: Joi.number()           
});

const updateMenuValidation = Joi.object({
    name: Joi.string()
                .label('Menu Name'),

    mainPrice: Joi.number()
                    .label('Main Price'),

    offerPrice: Joi.number()
                    .label('Offer Price'),
    
    type: Joi.string()
                .valid('regular', 'addon')
                .label('Menu Type'),
                
    status: Joi.number()           
});

module.exports = {
    saveMenuValidation: saveMenuValidation,
    updateMenuValidation : updateMenuValidation
}