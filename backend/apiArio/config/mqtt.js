module.exports = {
    brokerUrl: process.env.MQTT_BROKER_URL || 'mqtt://broker.hivemq.com',
    options: {
      clientId: 'scadaClientId',
      port: 1883,
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD,
    },
  };
  