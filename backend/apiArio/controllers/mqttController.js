const mqttClient = require('../mqtt');

exports.subscribeToTopic = (topic) => {
  mqttClient.subscribe(topic, { qos: 1 }, (error) => {
    if (error) {
      console.log('Suscripción fallida:', error);
    }
  });
};

exports.publishToTopic = (topic, message) => {
  mqttClient.publish(topic, message, { qos: 1 }, (error) => {
    if (error) {
      console.log('Publicación fallida:', error);
    }
  });
};
