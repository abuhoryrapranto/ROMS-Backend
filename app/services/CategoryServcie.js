const { Category } = require('../models');
const {saveCategoryValidation, updateCategoryValidation} = require('../validation/category');

async function getAllCategories(req, res) {
    
    let categories;
    if(req.query.deactive === "true") {
        categories = await Category.findAll(); 
    } else {
        categories = await Category.findAll({where:{status: 1}});
    }

    if(categories.length > 0)
        return res.status(200).send({'status': 200,'message': "Categories found", 'data': categories});
    return res.status(404).send({'status': 404,'message': 'Categories not found'});
}
async function save(req, res) {
    try {
        const value = await saveCategoryValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const data = {
                'name': req.body.name
            };
            const saveCategory = await Category.create(data);
            if(saveCategory)
                return res.status(201).send({'status': 201,'message': "Category saved successfully", 'data': data});
            return res.status(501).send({'status': 501,'message': "Something went wrong"});
        }
    }
    catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

async function update(req, res, id) {
    try {
        const value = await updateCategoryValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const data = {
                'name': req.body.name
            };
            const updateCategory = await Category.update(data, {where: {'id': id}});
            if(updateCategory)
                return res.status(200).send({'status': 200,'message': "Category saved successfully", 'data': data});
            return res.status(501).send({'status': 501,'message': "Something went wrong"});
        }
    }
    catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

module.exports = {
    save : save,
    update : update,
    getAllCategories : getAllCategories
}