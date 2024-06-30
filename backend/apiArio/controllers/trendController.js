const Trend = require('../models/trendModel');

// Crear un nuevo registro de tendencia
exports.createTrend = async (req, res) => {
  try {
    const newTrend = new Trend(req.body);
    await newTrend.save();
    res.status(201).json(newTrend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los registros de tendencia
exports.getTrends = async (req, res) => {
  try {
    const trends = await Trend.find();
    res.status(200).json(trends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un registro de tendencia
exports.updateTrend = async (req, res) => {
  try {
    const updatedTrend = await Trend.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un registro de tendencia
exports.deleteTrend = async (req, res) => {
  try {
    await Trend.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Trend deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
