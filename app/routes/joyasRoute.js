const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyasController');



router.get('/joyas', joyasController.buscarTodo);



// Define las rutas para las joyas
module.exports = router;