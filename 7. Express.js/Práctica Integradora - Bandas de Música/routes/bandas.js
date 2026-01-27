var express = require('express');
var router = express.Router();
const bandasController = require('../controller/bandasController');

/* GET home page. */
router.get('/', bandasController.index);
router.get('/detalle/:id', bandasController.bandas);
router.get('/genero/:genero', bandasController.genero);

module.exports = router;