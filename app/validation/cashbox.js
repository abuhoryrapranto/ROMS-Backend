const Joi = require('joi');

const openCashBoxValidation = Joi.object({
    balance: Joi.number()
                .required(),      
});

module.exports = {
    openCashBoxValidation: openCashBoxValidation
    
}