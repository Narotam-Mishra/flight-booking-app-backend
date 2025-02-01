
const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();
const AppError = require('../utils/errors/app-error')

async function createFlight(data){
    try {
        const flightRes = await flightRepository.create(data);
        return flightRes;
    } catch (error) {
        // console.log("Error:", error);
        if(error.name === 'SequelizeValidationError'){
            let explanation = [];
            // console.log(error);
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            // console.log("Explanation:", explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    // trips=MUM-DEL
    if(query.trips){
        const [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

        // Todo: add a check that arrival and departure are not same
        if (departureAirportId === arrivalAirportId) {
            throw new AppError('Departure and arrival airports cannot be the same', StatusCodes.BAD_REQUEST);
        }
    }
    try {
        const flightsRes = await flightRepository.getAllFlights(customFilter);
        return flightsRes;
    } catch (error) {
        throw new AppError('Cannot fetch data of flight', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createFlight,
    getAllFlights
}
