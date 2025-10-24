// controllers/clientesController.js

const { verificarLogin } = require('../models/clienteModel');

module.exports = {
  // Exibe a página de clientes (clientes.html)
  index: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

  // Exibe um formulário de teste (opcional)
formulario: (req, res) => {
  res.sendFile('login.html', { root: './views' });
},

  // Faz o login do cliente
  loginCliente: (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).send('Preencha todos os campos!');
    }

    const resultado = verificarLogin(email, senha);

    if (resultado.sucesso) {
      return res.status(200).send('<h3>✅ Login realizado com sucesso!</h3>');
    } else {
      return res.status(401).send('<h3>❌ E-mail ou senha incorretos!</h3>');
    }
  }
};
