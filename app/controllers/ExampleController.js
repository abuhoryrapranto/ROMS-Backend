//Controller for the routes

const exampleService = require('../services/ExampleService')
const { User } = require('../models');

function processAllUser(req, res) {
    exampleService.processAllUser()
    .then(result => res.json(
            {
                'status': 200,
                'message': 'All users found',
                'data':result
            }
        )
    );
}

module.exports = {
    processAllUser: processAllUser
}