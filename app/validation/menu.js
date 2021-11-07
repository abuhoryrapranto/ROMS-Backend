const Joi = require('joi');

const saveMenuValidation = Joi.object({
    name: Joi.string()
                .required()
                .label('Menu Name'),

    image: Joi.string(),
    
    variants: Joi.string()
                .label('Variants'),

    mainPrice: Joi.number()
                    .required()
                    .label('Main Price'),

    offerPrice: Joi.number()
                    .label('Offer Price'),
    
    type: Joi.string()
                .valid('regular', 'addon')
                .required()
                .label('Menu Type'),
                
    status: Joi.number()           
});

module.exports = {
    saveMenuValidation: saveMenuValidation
}