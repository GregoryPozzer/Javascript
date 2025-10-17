const path = require('path');
const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
  },

  formulario: (req, res) => {
    res.sendFile(path.resolve('views/formulario.html'));
  },

  saudacao: (req, res) => {
    const { nome, idade, cpf } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade, cpf);
    res.send(`<h1>${mensagem}</h1>`);
  },

  produtos: (req, res) => {
    res.sendFile(path.resolve('views/produtos.html'));
  },

  camisetas: (req, res) => {
    res.sendFile(path.resolve('views/camisetas.html'));
  }
};
