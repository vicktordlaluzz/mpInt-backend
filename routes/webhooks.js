const { Router } = require('express');
const router = Router();
const { createNotification, getNotifications } = require('../controllers/webhooks');

// Obtiene todos las notificaciones
router.get('/', getNotifications);

// Crea una nueva notificacion
router.post('/', createNotification);

module.exports = router;