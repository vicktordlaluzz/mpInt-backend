const { response } = require("express");

const createNotification = async(req, res = response) => {
    try {
        console.log(req.body);
        res.status(201).json({
            ok: true
        });
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