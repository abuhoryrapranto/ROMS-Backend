const { Menu } = require('../models');
const {saveMenuValidation} = require('../validation/menu');
const {generateSlug} = require('../helpers/baseHelper');

async function saveMenu(req, res) {
    try {
        const value = await saveMenuValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const data = {
                'name': req.body.name,
                'slug': await generateSlug(Menu, req.body.name),
                'variants': req.body.variants,
                'mainPrice': req.body.mainPrice,
                'offerPrice': req.body.offerPrice,
                'type': req.body.type
            };
            const saveMenu = await Menu.create(data);
            if(saveMenu)
                return res.status(201).send({'status': 201,'message': "Menu saved successfully"});
            return res.status(501).send({'status': 501,'message': "Something went wrong"});
        }
    }
    catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

module.exports = {
    saveMenu : saveMenu
}