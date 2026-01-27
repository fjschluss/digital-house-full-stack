let express = require('express');
let router = express.Router();

let heroeController = require('../controllers/heroesController');

// Aqui estan las rutas de mainController.js
router.get('/', heroeController.index);
router.get('/detalles/id/:id', heroeController.detalle);
router.get('/bio/id/:id/:ok?', heroeController.bio);

module.exports = router;