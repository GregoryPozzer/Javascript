// models/clienteModel.js

// Usuário fixo
const usuarioFixo = {
  email: 'cliente@teste.com',
  senha: '123456'
};

// Função que verifica o login
function verificarLogin(email, senha) {
  if (email === usuarioFixo.email && senha === usuarioFixo.senha) {
    return { sucesso: true, mensagem: 'Login realizado com sucesso!' };
  } else {
    return { sucesso: false, mensagem: 'E-mail ou senha incorretos!' };
  }
}

// Exporta a função
module.exports = { verificarLogin };
