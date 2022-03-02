const cashBoxService = require('../services/CashBoxService');

async function openCashBox(req, res) {
    return await cashBoxService.openCashBox(req, res);
}

module.exports = {

    openCashBox : openCashBox
}
