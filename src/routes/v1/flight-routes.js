
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

// /api/v1/flights?trips=BLR-PAT GET
router.get(
  "/",
  FlightController.getAllFlights
);

// /api/v1/flights/:id GET
router.get(
  "/:id",
  FlightController.getFlight
);

// /api/v1/flights/:id UPDATE


// /api/v1/flights/:id DELETE


//  /api/v1/flights/:id/seats PATCH
router.patch(
  '/:id/seats',
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
)

module.exports = router;