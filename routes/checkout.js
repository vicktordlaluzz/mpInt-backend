const { Router } = require('express');
const router = Router();
const { createPreferencia } = require('../controllers/checkout');

// Obtiene todos los articulos
router.post('/', createPreferencia);

// // Obtiene imagen
// router.get('/imgs/:img', getImg);

// // Obtiene la informacion de un articulo en especifico
// router.get('/:id', getArticulo);

// // Crea un nuevo articulo
// router.post('/', createArticulo);

module.exports = router;