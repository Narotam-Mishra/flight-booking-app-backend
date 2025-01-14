
const express = require('express');
const { AirIndiaController } = require('../../controllers');
const { AirIndiaMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airindia POST
router.post(
  "/",
  AirIndiaMiddlewares.validateCreateRequest,
  AirIndiaController.createAirIndia
);

module.exports = router;