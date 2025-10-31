const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Rota principal de produtos
router.get('/', produtosController.produtos);

// Rota para camisetas
router.get('/camisetas', produtosController.camisetas);
router.get("/cadastrar", produtosController.formCadastrar);
router.post("/cadastrar", produtosController.cadastrar);


module.exports = router;
  

