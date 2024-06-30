const WebSocket = require('ws');
const websocketConfig = require('../config/websocket');

const wss = new WebSocket.Server({
  port: websocketConfig.port,
  ...websocketConfig.options
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

module.exports = wss;
