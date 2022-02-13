const { User } = require('../models');

async function getUserInfos(req, res) {
    const user = await User.findOne({ where: {
        uuid: req.userId
    }})
    return res.status(200).send({'status': 200,'message': "User info found", 'data': user});
}

module.exports = {
    getUserInfos : getUserInfos
}