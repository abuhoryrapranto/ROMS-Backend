const Joi = require('joi');

const registerValidation = Joi.object({
    fullName: Joi.string()
                .required()
                .label('Full Name'),

    email: Joi.string()
                .email()
                .required()
                .label('Email'),

    phone: Joi.string()
                .required()
                .label('Phone'),

    password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required()
                .label('Password'),
        
    passwordConfirmation: Joi.string()
                            .required()
                            .valid(Joi.ref('password'))
                            .label('Password Confirmation'),
                    
    
})

module.exports = {
    registerValidation: registerValidation
}