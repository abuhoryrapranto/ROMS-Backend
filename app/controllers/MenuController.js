const menuServcie = require('../services/MenuService');

async function saveMenu(req, res) {
    await menuServcie.save(req, res);
}

async function updateMenu(req, res, id) {
    id = req.params.id;
    await menuServcie.update(req, res, id);
}

module.exports = {
    saveMenu : saveMenu,
    updateMenu : updateMenu
}