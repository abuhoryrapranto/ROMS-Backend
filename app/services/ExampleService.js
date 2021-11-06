// Add bussiness logic here

const { User } = require('../models');

async function processAllUser(req, res) {
    let data = await User.findAll({raw:true});
    return data;
    
}

module.exports = {
    processAllUser: processAllUser
}