
const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

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

module.exports = {
    createNewCity,
}
