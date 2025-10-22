const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota principal de produtos
router.get('/', clientesController.clientes);



module.exports = router;
  
