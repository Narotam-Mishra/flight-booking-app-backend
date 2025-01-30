
const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airports
 * req-body: {name: 'IGI', cityId: 7, addressCode: 'DEL'}
 */
async function createAirport(req, res) {
    try {
        const airportRes = await AirportService.createAirport({
            name: req.body.name,
            airportCode: req.body.airportCode,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        SuccessResponse.data = airportRes;
        SuccessResponse.message = "Airport data created successfully";
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
 * GET : /airports
 */
async function getAirports(req, res){
    try {
        const airportsRes = await AirportService.getAllAirports();
        SuccessResponse.data = airportsRes;
        SuccessResponse.message = "Airport data fetched successfully"
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
 * GET : /airports/:id
 */
async function getAirport(req, res){
    try {
        const airportById = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airportById;
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
 * UPDATE: /airports/:id
 */
async function updateAirport(req, res){
    try {
        const updatedAirportRes = await AirportService.updateAirport(
          req.params.id,
          {
            name: req.body.name,
            address: req.body.address,
          }
        );
        SuccessResponse.message = "Airport data updated successfully"
        SuccessResponse.data = updatedAirportRes;
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
 * DELETE : /airports/:id
 */
async function destroyAirport(req, res){
    try {
        const delAirportRes = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.message = "Airport data deleted successfully";
        SuccessResponse.data = delAirportRes;
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
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    destroyAirport,
}