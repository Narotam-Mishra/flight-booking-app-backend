
const express = require('express');
const { AirIndiaController } = require('../../controllers');

const router = express.Router();

console.log("Inside airindia routes");

// /api/v1/airindia POST
router.post('/', AirIndiaController.createAirIndia);

module.exports = router;