const mqtt = require('mqtt');
const Trend = require('../models/trendModel');

const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  client.subscribe('tuTopic');
});

client.on('message', (topic, message) => {
  // Guardar mensaje en la base de datos
  const value = parseFloat(message.toString());
  const newTrend = new Trend({ value, timestamp: new Date().toISOString() });
  newTrend.save();
});

module.exports = client;
