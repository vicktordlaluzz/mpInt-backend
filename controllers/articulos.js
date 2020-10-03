const { response } = require("express");
const Articulo = require('../models/articulo');
const path = require('path');
const fs = require('fs');

const mercadopago = require('mercadopago');

const getArticulos = async(req, res = response) => {
    try {
        const articulos = await Articulo.find();
        res.json({
            ok: true,
            articulos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado contacte al administrador'
        });
    }
};

const getArticulo = async(req, res = response) => {
    try {
        const artId = req.params.id;
        const articulo = await Articulo.findById(artId);
        //Crea un objeto de preferencia
        const preference = {

            "items": [{
                "id": "1234",
                "title": articulo.nombre,
                "currency_id": "MXN",
                "picture_url": "http://localhost:3000/api/articulos/imgs/" + articulo.img,
                "description": "Dispositivo móvil de Tienda e-commerce",
                "category_id": "art",
                "quantity": 1,
                "unit_price": articulo.precio
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
            "shipments": {
                "cost": 150,
                "mode": "not_specified",
            },
            "back_urls": {
                "success": "http://localhost:4200/comprar/payment/success/",
                "failure": "http://localhost:4200/comprar/payment/failure/",
                "pending": "http://localhost:4200/comprar/payment/pending/"
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
                    ok: true,
                    response,
                    articulo
                })
            }).catch(function(error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Error inesperado administrador'
                })
            });

    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Error inesperado contacte al administrador'
        })
    }
};

const createArticulo = async(req, res = response) => {
    console.log(req.body);
    const articulo = new Articulo(req.body.articulo);
    try {
        const artiDB = await articulo.save();
        res.json({
            ok: true,
            artiDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado contacte al adminstrador'
        });
    }
    res.json({
        ok: true,
        msg: 'getArticulo endPoint'
    });
};

const getImg = async(req, res = response) => {
    const img = req.params.img;

    let pathImg = path.join(__dirname, `../images/${img}`);

    if (fs.existsSync(pathImg)) {
        res.sendFile(pathImg);
    }
};

module.exports = {
    getArticulos,
    getArticulo,
    createArticulo,
    getImg
};