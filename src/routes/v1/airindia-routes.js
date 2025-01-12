
const express = require('express');
const { AirIndiaController } = require('../../controllers');

const router = express.Router();

// /api/v1/airindia POST
router.post('/', AirIndiaController.createAirIndia);

module.exports = router;