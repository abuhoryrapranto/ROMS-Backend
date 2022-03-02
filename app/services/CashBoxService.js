const { CashBox } = require('../models');
const { openCashBoxValidation } = require('../validation/cashbox');

async function openCashBox(req, res) {

    try {

        const value = await openCashBoxValidation.validateAsync(req.body, {abortEarly: false});

        const exist = await CashBox.findOne({where: {close:null}});

        if(exist) return res.status(400).send({'status': res.statusCode,'message': "Drawer is not closed."});

        const save = await CashBox.create({open:new Date().toISOString().slice(0, 19).replace('T', ' '), balance:req.body.balance});

        if(save) return res.status(201).send({'status': 201,'message': "Drawer open successfully.", 'data': save});

        return res.status(500).send({'status': res.statusCode,'message': "Something went wrong."});

    } 
    
    catch(err) {

        return res.status(500).send({'status': res.statusCode,'message': "Something went wrong.", 'err': err});
    }
}

module.exports = {

    openCashBox: openCashBox
}