const express = require('express');
const router = express.Router();
/*const joyasController = require('../controllers/joyasController');*/



router.get('/', (req, res) => {
  res.json({
    message: 'HOLA MUNDO',
  });
});



// Define las rutas para las joyas
module.exports = router;