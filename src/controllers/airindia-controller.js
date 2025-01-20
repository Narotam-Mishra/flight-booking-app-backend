
const { StatusCodes } = require('http-status-codes');
const { AirIndiaService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * req-body: {}
 */
async function createAirIndia(req, res) {
    try {
        const airindiaRes = await AirIndiaService.createAirPlane({
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
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

/**
 * GET : /airplanes
 */
async function getAirplanes(req, res){
    try {
        const airplanes = await AirIndiaService.getAllAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

/**
 * GET : /airplanes/id
 */
async function getAirplane(req, res){
    try {
        const airplaneById = await AirIndiaService.getAirplane(req.params.id);
        SuccessResponse.data = airplaneById;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirIndia,
    getAirplanes,
    getAirplane
}