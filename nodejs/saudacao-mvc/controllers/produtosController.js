
const produtosModel = require('../models/produtosModel'); 

module.exports = {

        produtos: (req, res) => {
            res.sendFile('produtos.html', { root: './views' });
        },
         
        camisetas: (req, res) => {
            res.sendFile('camisetas.html', { root: './views' });
        },     
        
     // Formulário de cadastro
    formCadastrar: (req, res) => {
        res.sendFile('formCadastrar.html', { root: './views'});
        },

    // Ação de cadastrar produto
    cadastrar: (req, res) => {
        const { id, descricao, quantidade, preco } = req.body;
        const mensagemCadastro = produtosModel.cadastrar(id, descricao, quantidade, preco);
        res.send (`<h1>${mensagemCadastro}<h1>` );

    }

};

  

