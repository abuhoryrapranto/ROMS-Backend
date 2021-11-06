//Controller for the routes

const { User } = require('../models');
const {registerValidation} = require('../validation/auth');
const bcrypt = require("bcrypt");
const { uniqueEmail, uniquePhone } = require('../helpers/checkHelper');

async function register(req, res) {
    try {
        const value = await registerValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const existEmail = await uniqueEmail(User, req.body.email);
            if(existEmail) return res.status(400).send({'status': 400,'message': "\"Email\" is already exist"});
            const existPhone = await uniquePhone(User, req.body.phone);
            if(existPhone) return res.status(400).send({'status': 400,'message': "\"Phone\" is already exist"});
            else {
                const user = {
                    'fullName': req.body.fullName,
                    'email': req.body.email,
                    'phone': req.body.phone,
                    'password': await bcrypt.hash(req.body.password, 10)
                }
                const saveUser = await User.create(user);
                if(saveUser) 
                    return res.status(201).send({'status': 201,'message': "User registered successfully"});
                return res.status(501).send({'status': 501,'message': "Something went wrong"});
            }
        }
    }catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

module.exports = {
    register: register
}