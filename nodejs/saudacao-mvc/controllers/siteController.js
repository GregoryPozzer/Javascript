const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade, cpf} = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade, cpf);
    res.send(`<h1>${mensagem}</h1>`);
  }
};
