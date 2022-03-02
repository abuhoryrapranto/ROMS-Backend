const { Menu, Order, OrderHistory } = require('../models');
const { saveOrderValidation, orderStatusChangeValidation } = require('../validation/order');
const { v4: uuidv4 } = require('uuid');

async function saveOrder(req, res) {

    try {

        const value = await saveOrderValidation.validateAsync(req.body, {abortEarly: false});

        let order = req.body.order;

        let code = (Math.random() + 1).toString(36).substring(7);

        let orders = order.map(item => ({...item, uuid: uuidv4(), code: code}));
        
        let menuId = orders.map(item => item.menuId);

        let exist = await Menu.findAll({
            where: {
                id: menuId,
                status: 1
            }
        });

        if(exist.length == menuId.length) {

            const save = await Order.bulkCreate(orders);

            if(save) {

                const historyData = {
                    'uuid': uuidv4(), 
                    'code': code,
                    'customerName': req.body.customerName,
                    'customerPhone': req.body.customerPhone,
                    'customerAddress': req.body.customerAddress,
                    'tableNumber': req.body.tableNumber, 
                    'deliveryPerson': req.body.deliveryPerson,
                    'status': 'pending'
                };
                const saveHistory = await OrderHistory.create(historyData);

                if(saveHistory) return res.status(201).send({'status': 201,'message': "Order saved successfully."});

                return res.status(500).send({'status': 500,'message': "Something went wrong."});
            }

            return res.status(500).send({'status': 500,'message': "Something went wrong."});
        }

        return res.status(500).send({'status': 500,'message': "Something went wrong."});

    } catch(err) {

        return res.status(404).send({'status': res.statusCode,'message': "Something went wrong.",'err': err});
    }
}

async function orderStatusChange(req, res) {

    try {

        const validate = await orderStatusChangeValidation.validateAsync(req.body, {abortEarly: false});

        const data = {
            'code': req.body.code,
            'status': req.body.status
        };

        const orderHistory = await OrderHistory.findOne({where: {
            code: data.code
        }});

        orderHistory.status = data.status;
        
        const save = orderHistory.save();

        if(!save) return res.status(500).send({'status': 500,'message': "Something went wrong."});

        return res.status(200).send({'status': res.statusCode,'message': "Status updated successfully."});

    } catch(err) {

        return res.status(404).send({'status': res.statusCode,'err': err});
    }
}

module.exports = {
    saveOrder : saveOrder,
    orderStatusChange : orderStatusChange
}