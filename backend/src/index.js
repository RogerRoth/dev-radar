const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://rrothmund:omnistack@cluster0-teqrq.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//app.use(cors({ origin: 'http://localhost:3000'})) para o endereço desejado
app.use(cors()); // libera acesso externo para todo tipo de aplicação

app.use(express.json());

app.use(routes);

// get

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: reques.body (Dados para criação ou alteração de um registro)



server.listen(3333);
