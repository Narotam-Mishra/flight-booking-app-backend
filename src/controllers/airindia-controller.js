
const { StatusCodes } = require('http-status-codes');
const { AirIndiaService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirIndia(req, res) {
    try {
        const airindiaRes = await AirIndiaService.createAirIndia({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airindiaRes;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirIndia
}