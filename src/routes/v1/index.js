
const express = require('express');
const { InfoController } = require('../../controllers');
const airindiaRoutes = require('./airindia-routes');
const cityRoutes = require('./city-routes');

const router = express.Router();

router.use('/airplanes', airindiaRoutes);
router.use('/cities', cityRoutes);

router.get('/info', InfoController.info);

module.exports = router;