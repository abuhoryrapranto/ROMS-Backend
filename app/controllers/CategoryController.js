const categoryService = require('../services/CategoryServcie');

async function getAllCategories(req, res) {
    return await categoryService.getAllCategories(req, res);
}
async function saveCategory(req, res) {
    return await categoryService.save(req, res);
}

async function updateCategory(req, res, id) {
    id = req.params.id;
    return await categoryService.update(req, res, id);
}

module.exports = {
    saveCategory : saveCategory,
    updateCategory : updateCategory,
    getAllCategories : getAllCategories
}
