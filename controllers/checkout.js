const { response } = require('express');
// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe921a3d-617633181',
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});



const createPreferencia = async(req, res = response) => {


    // Crea un objeto de preferencia
    // let preference = {
    //     items: [{
    //         title: 'Mi producto',
    //         unit_price: 100,
    //         quantity: 1,
    //     }]
    // };

    // mercadopago.preferences.create(preference)
    //     .then(function(response) {
    //         // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    //         global.id = response.body.id;
    //         res.json({
    //             response
    //         })
    //     }).catch(function(error) {
    //         console.log(error);
    //     });

    res.json({
        ok: true,
        msg: 'preferencia creada',
        response: req.body
    })
};

module.exports = {
    createPreferencia
};