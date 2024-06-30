const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// Iniciar servidor WebSockets
const websocketHandler = require('./controllers/websocketController');
websocketHandler.attach(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
