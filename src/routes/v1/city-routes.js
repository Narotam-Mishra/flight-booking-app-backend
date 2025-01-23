
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



module.exports = router;