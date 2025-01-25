
const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * req-body: {}
 */
async function createAirIndia(req, res) {
    try {
        const airplaneRes = await AirplaneService.createAirPlane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airplaneRes;
        SuccessResponse.message = "Airplane data created successfully";
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
        const airplanes = await AirplaneService.getAllAirplanes();
        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Airplane data fetched successfully"
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
 * GET : /airplanes/:id
 */
async function getAirplane(req, res){
    try {
        const airplaneById = await AirplaneService.getAirplane(req.params.id);
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

/**
 * UPDATE: /airplanes/:id
 */
async function updateAirplane(req, res){
    try {
        const updatedAirplaneRes = await AirplaneService.updateAirplane(
          req.params.id,
          { capacity: req.body.capacity }
        );
        SuccessResponse.message = "Airplane data updated successfully"
        SuccessResponse.data = updatedAirplaneRes;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


/**
 * DELETE : /airplanes/:id
 */
async function destroyAirplane(req, res){
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.message = "Airplane data deleted successfully";
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

module.exports = {
    createAirIndia,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
}