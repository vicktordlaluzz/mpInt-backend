const { Router } = require('express');
const router = Router();
const { getArticulo, getArticulos, createArticulo, getImg } = require('../controllers/articulos');

// Obtiene todos los articulos
router.get('/', getArticulos);

// Obtiene imagen
router.get('/imgs/:img', getImg);

// Obtiene la informacion de un articulo en especifico
router.get('/:id', getArticulo);

// Crea un nuevo articulo
router.post('/', createArticulo);

module.exports = router;