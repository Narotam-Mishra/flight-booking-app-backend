
const express = require('express');
const { InfoController } = require('../../controllers');
const airindiaRoutes = require('./airindia-routes');

const router = express.Router();

router.use('/airplanes', airindiaRoutes);

router.get('/info', InfoController.info);

module.exports = router;