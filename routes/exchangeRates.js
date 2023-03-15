const express = require('express');
const router = express.Router();

// import controllers
const { getAllRates } = require('../controllers/getRatesController');

// route for all rates
router.get('/:base', getAllRates);

module.exports = router;