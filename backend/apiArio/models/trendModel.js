const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trend', trendSchema);
