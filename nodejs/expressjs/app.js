//importe o express 
import express from 'express';

const app = express();
const port = 3000;

// Middleware para definir o cabeçalho da resposta como H
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  next();
});

//Roteamento básico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Página Sobre Nós</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Fale Conosco</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fotos</h1>");
});

//Rota para lidar com páginas não encontradas (404)
app.use((req, res) => {
    res.status(404).send("<h1>Erro 404: Página Não Encontrada</h1>");
});

//Inicia o servidor para ouvir na porta definida

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
