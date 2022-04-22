const { User } = require('../models');

async function getUserInfos(req, res) {
    const user = await User.findOne({ where: {
        uuid: req.userId
    }})
    return res.status(200).send({'status': 200,'message': "User info found", 'data': user});
}

async function logout(req, res) {

    try {

        res.clearCookie("token");

        return res.status(200).send({'status': 200,'message': "Successfully logout"});

    } catch(err) {

        return res.status(500).send({'status': 500,'message': err});
    }
}

module.exports = {
    getUserInfos : getUserInfos,
    logout: logout
}