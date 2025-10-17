const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Rota principal de produtos
router.get('/', siteController.produtos);

// Rota para camisetas
router.get('/camisetas', siteController.camisetas);

module.exports = router;
  

