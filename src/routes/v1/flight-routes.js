
const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/flights POST
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

// /api/v1/flights GET


// /api/v1/flights/:id GET


// /api/v1/flights/:id UPDATE


// /api/v1/flights/:id DELETE


module.exports = router;