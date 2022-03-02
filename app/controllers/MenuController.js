const menuServcie = require('../services/MenuService');

async function getAllMenus(req, res) {
    return await menuServcie.getAllMenus(req, res);
}

async function saveMenu(req, res) {
    return await menuServcie.save(req, res);
}

async function updateMenu(req, res, id) {
    id = req.params.id;
    return await menuServcie.update(req, res, id);
}

module.exports = {
    saveMenu : saveMenu,
    updateMenu : updateMenu,
    getAllMenus : getAllMenus
}