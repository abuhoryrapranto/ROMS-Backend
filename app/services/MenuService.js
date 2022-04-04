const { Menu, Category } = require('../models');
const {saveMenuValidation, updateMenuValidation} = require('../validation/menu');
const {generateSlug} = require('../helpers/baseHelper');

async function getAllMenus(req, res) {
    const menus = await Menu.findAll({ include: [Category]});
    if(menus)
        return res.status(200).send({'status': 200,'message': "Menus found", 'data': menus});
    return res.status(404).send({'status': 404,'message': 'Menus not found'});
}

async function save(req, res) {
    try {
        const value = await saveMenuValidation.validateAsync(req.body, {abortEarly: false});
        let categoryId = req.body.categoryId;
        if(value) {
            if(categoryId) {
                const exist = await Category.findByPk(categoryId);
                if(exist) {
                    categoryId = req.body.categoryId;
                }else {
                    return res.status(404).send({'status': 404,'message': "Category not found"});
                }
            }else{
                categoryId = null;
            }
            const data = {
                'name': req.body.name,
                'slug': await generateSlug(Menu, req.body.name),
                'categoryId': categoryId,
                'variants': req.body.variants,
                'mainPrice': req.body.mainPrice,
                'offerPrice': req.body.offerPrice,
                'type': req.body.type
            };
            const saveMenu = await Menu.create(data);
            if(saveMenu)
                return res.status(201).send({'status': 201,'message': "Menu saved successfully", 'data': data});
            return res.status(501).send({'status': 501,'message': "Something went wrong"});
        }
    }
    catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

async function update(req, res, id) {
    try {
        const value = await updateMenuValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const exist = await Menu.findByPk(id);
            if(!exist) return res.status(404).send({'status': 404,'message': "Menu not fou"});
            const data = {
                'name': req.body.name,
                'mainPrice': req.body.mainPrice,
                'offerPrice': req.body.offerPrice,
                'type': req.body.type
            };
            const saveMenu = await Menu.update(data, {where: {id: id}});
            if(saveMenu)
                return res.status(200).send({'status': 200,'message': "Menu updated successfully", 'data': data});
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
    getAllMenus : getAllMenus
}