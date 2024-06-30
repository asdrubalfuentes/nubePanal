module.exports = {
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/scadaDB',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };
  