let express = require('express');
let router = express.Router();

let mainController = require('../controllers/mainController');

// Aqui estan las rutas de mainController.js
router.get('/', mainController.index);
router.get("/creditos", mainController.creditos);

module.exports = router;