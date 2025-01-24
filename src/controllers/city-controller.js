
const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { CityRepository } = require('../repositories');

/**
 * POST : /cities
 * req-body: { name: 'Birmingham' }
 */
async function createNewCity(req, res) {
    try {
        const cityRes = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = cityRes;
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
 * GET : /cities
 */
async function getAllCities(req, res) {
    try {
        const allCitiesRes = await CityService.getAllCities();;
        SuccessResponse.data = allCitiesRes;
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
 * DELETE : /cities/:id
 */
async function deleteCity(req, res){
    try {
        const cityRes = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = cityRes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createNewCity,
    getAllCities,
    deleteCity,
}
