const { response } = require('express');
// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const Preferencia = require('../models/preferencia');

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe921a3d-617633181',
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});



const createPreferencia = async(req, res = response) => {

    //Crea un objeto de preferencia
    const preference = {

        "items": [{
            "id": "1234",
            "title": req.body.nombre,
            "currency_id": "MXN",
            "picture_url": "http://localhost:3000/api/articulos/imgs/" + req.body.img,
            "description": "Dispositivo móvil de Tienda e-commerce",
            "category_id": "art",
            "quantity": 1,
            "unit_price": req.body.precio
        }],
        "payer": {
            "name": "Lalo",
            "surname": "Landa",
            "email": "test_user_58295862@testuser.com",
            "phone": {
                "area_code": "52",
                "number": 5549737300
            },
            "address": {
                "street_name": "Insurgentes Sur",
                "street_number": 1602,
                "zip_code": "03940"
            }
        },
        "back_urls": {
            "success": "https://www.success.com",
            "failure": "http://www.failure.com",
            "pending": "http://www.pending.com"
        },
        "auto_return": "approved",
        "payment_methods": {
            "excluded_payment_methods": [{
                "id": "amex"
            }],
            "excluded_payment_types": [{
                "id": "atm"
            }],
            "installments": 6
        },
        "notification_url": "https://www.your-site.com/ipn",
        "external_reference": "vicktordlaluzz@gmail.com"
    };

    mercadopago.preferences.create(preference)
        .then(function(response) {
            // Este valor reemplazará el string "<%= global.id %>" en tu HTML
            global.id = response.body.id;
            res.json({
                response
            })
        }).catch(function(error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado administrador'
            })
        });
};

module.exports = {
    createPreferencia
};