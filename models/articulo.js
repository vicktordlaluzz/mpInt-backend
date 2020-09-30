const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = model('Articulo', ArticuloSchema);