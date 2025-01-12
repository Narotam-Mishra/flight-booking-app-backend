
const { StatusCodes } = require('http-status-codes');
const { AirIndiaService } = require('../services');
const { error } = require('winston');

async function createAirIndia(req, res) {
    try {
        console.log("Request body:",req.body);
        
        const airindiaRes = await AirIndiaService.createAirIndia({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created an airindia ft',
                    data: airindiaRes,
                    error: {}
                })
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airindia ft',
                    data: {},
                    error: error
                })
    }
}

module.exports = {
    createAirIndia
}