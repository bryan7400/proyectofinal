var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');
var usuarioController = require('../controllers/usuarioController');

/* GET home page. */
router.get('/',reclamoController.principal);
router.get('/registroReclamo',reclamoController.registroReclamo);
router.post('/guardarReclamo', reclamoController.guardarReclamo);

router.get('/',usuarioController.principal);
router.get('/registroUsuario',usuarioController.registroUsuario);
router.post('/guardarUsuario', usuarioController.guardarUsuario);
module.exports = router;
