//Controller for the routes

const { User } = require('../models');
const {registerValidation, loginValidation} = require('../validation/auth');
const bcrypt = require("bcrypt");
const { uniqueEmail, uniquePhone } = require('../helpers/checkHelper');
var jwt = require('jsonwebtoken');
const { func } = require('joi');

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

async function login(req, res) {
    try {
        const value = await loginValidation.validateAsync(req.body, {abortEarly: false});
        if(value) {
            const existEmail = await User.findOne({ where: { email: req.body.email } });
            if(existEmail) {
                const match = await bcrypt.compare(req.body.password, existEmail.password);
                if(match) {
                    const token = jwt.sign({data: existEmail.email}, process.env.JWT_SECRET, { expiresIn: '10h' });
                    return res.status(200).send({'status': 200,'message': "Successfully login", 'token': token});
                }else {
                    return res.status(404).send({'status': 404,'message': "Password not match"});
                }
            }else {
                return res.status(404).send({'status': 404,'message': "Email not found"});
            }
        }
    }
    catch(err) {
        return res.status(422).send({'status': 422,'message': err});
    }
}

module.exports = {
    register: register,
    login: login
}