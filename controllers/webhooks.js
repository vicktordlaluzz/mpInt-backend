const { response } = require("express");

const createNotification = async(req, res = response) => {
    try {
        console.log(req.body);
        res.status(201).json({
            ok: true
        });
        switch (req.body.type) {
            case 'payment':
                console.log('se recibio notificacion de payment');
                break;
            case 'plan':
                console.log('se recibio notificacion de plan');
                break;
            case 'subscription':
                console.log('se recibio notificacion de suscriocions');
                break;
            case 'invoice':
                console.log('se recibio notificacion de invoice');
                break;

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado contacte al administrador'
        });
    }
};

const getNotifications = async(req, res = response) => {
    try {
        res.json({
            ok: true,
            msg: 'getNotifications'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado contacte al administrador'
        });
    }
};

module.exports = {
    createNotification,
    getNotifications
};