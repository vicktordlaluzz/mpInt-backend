const { response } = require("express");
const Articulo = require('../models/articulo');
const path = require('path');
const fs = require('fs');

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
        res.json({
            ok: true,
            articulo
        })
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