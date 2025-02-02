

const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

/**
 * POST : /flights
 * req-body: {
 * flightNumber: 'UK 808'
 * airplaneId: 'a380'
 * departureAirportId: 12,
 * arrivalAirportId: 11,
 * arrivalTime: 09:10:00,
 * departureTime: 11:10:00,
 * price: 8500,
 * boardingGate: 13B,
 * totalSeats: 120
 * }
 */
async function createFlight(req, res) {
    try {
        const flightRes = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flightRes;
        SuccessResponse.message = "Flight data created successfully!!";
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

async function getAllFlights(req, res) {
    try {
        const flightsRes = await FlightService.getAllFlights(req.query);
        if (flightsRes.length === 0) {
            throw new AppError(
                'No such record exists with the given filters!!',
                StatusCodes.NOT_FOUND, // Use 404 for "not found"
            );
        }
        SuccessResponse.data = flightsRes;
        SuccessResponse.message = "Flight data fetched with fliter successfully!!";
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
    createFlight,
    getAllFlights
}