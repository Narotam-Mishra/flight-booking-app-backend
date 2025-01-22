
const express = require('express');
const { AirIndiaController } = require('../../controllers');
const { AirIndiaMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router.post(
  "/",
  AirIndiaMiddlewares.validateCreateRequest,
  AirIndiaController.createAirIndia
);

// /api/v1/airplanes GET
router.get(
  "/",
  AirIndiaController.getAirplanes,
)

// /api/v1/airplanes/:id GET
router.get(
  "/:id",
  AirIndiaController.getAirplane,
)

// /api/v1/airplanes/:id DELETE
router.delete(
  "/:id",
  AirIndiaController.destroyAirplane,
)

module.exports = router;