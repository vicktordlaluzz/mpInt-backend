const { response } = require("express");
const Articulo = require('../models/articulo')

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
    res.json({
        ok: true,
        msg: 'getArticulo endPoint'
    });
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

module.exports = {
    getArticulos,
    getArticulo,
    createArticulo
};