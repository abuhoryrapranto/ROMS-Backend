const categoryService = require('../services/CategoryServcie');

async function saveCategory(req, res) {
    await categoryService.save(req, res);
}

async function updateCategory(req, res, id) {
    id = req.params.id;
    await categoryService.update(req, res, id);
}

module.exports = {
    saveCategory : saveCategory,
    updateCategory : updateCategory
}
