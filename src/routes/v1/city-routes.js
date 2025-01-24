
const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  CityMiddlewares.validateCreateCityRequest,
  CityController.createNewCity
);

// /api/v1/cities GET
router.get(
  "/",
  CityController.getAllCities
);

// /api/v1/cities/:id DELETE
router.delete(
  "/:id",
  CityController.deleteCity
);



module.exports = router;