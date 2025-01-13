
const express = require('express');
const { InfoController } = require('../../controllers');
const airindiaRoutes = require('./airindia-routes');

const router = express.Router();

console.log("Inside v1 routes");

router.use('/airindia', airindiaRoutes);

router.get('/info', InfoController.info);

module.exports = router;