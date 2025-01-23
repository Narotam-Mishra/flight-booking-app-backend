
const express = require('express');
const { CityController } = require('../../controllers');

const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  CityController.createNewCity
);



module.exports = router;