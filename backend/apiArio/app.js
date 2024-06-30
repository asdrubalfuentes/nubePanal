const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { schema, resolvers } = require('./graphql');
const mqttHandler = require('./mqtt');
const websocketHandler = require('./controllers/websocketController');

const app = express();

// Configurar servidor GraphQL
const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });
apolloServer.applyMiddleware({ app });

// Configurar MQTT
mqttHandler.connect();

// Configurar WebSockets
websocketHandler.initialize(app);

module.exports = app;
