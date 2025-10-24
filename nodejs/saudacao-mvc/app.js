// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

const clientesRoutes = require('./routes/clientes');
app.use('/clientes', clientesRoutes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
