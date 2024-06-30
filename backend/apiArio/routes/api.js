const express = require('express');
const router = express.Router();
const trendController = require('../controllers/trendController');

// Rutas para el modelo Trend
router.post('/trends', trendController.createTrend);
router.get('/trends', trendController.getTrends);
router.put('/trends/:id', trendController.updateTrend);
router.delete('/trends/:id', trendController.deleteTrend);

module.exports = router;
