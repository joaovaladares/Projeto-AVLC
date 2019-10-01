// Servidor
const express = require("express");
const app = express();
//const serverless = require('serverless-http');
const server = require('http').createServer(app);
const io = require("socket.io")(server);

const teste = require('cifra.js');

//setar html
const path = require("path");
//body parser
const bodyParser = require('body-parser');


//seta html
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',  (req, res) => {
  res.render('index.html');
});

senha = [[1, 2], [1, 5]]
decode2 = "avlc"
frase = "eu amo avlc"

io.on('connection', socket => {
  console.log(`socket conectado: ${socket.id}`);
  socket.on('frase', data => {
    //recebe a frase com a senha
    frase1 = teste.encode(data, senha);
    console.log("Frase cifrada: " + frase1.fraseFinal)
    //envia a frase cifrada
    socket.emit("frase-out", frase1.fraseFinal);
    //mostra no console a frase original
    frase2 = teste.decode(frase1.fraseFinal, senha, frase1.espacos)
    console.log("Frase decifrada: " + frase2)
  });
});

server.listen(3000);