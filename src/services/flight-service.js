
const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');

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
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL

    // filter for departure and arrival airport
    if(query.trips){
        const [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

        // add a check that arrival and departure are not same
        if (departureAirportId === arrivalAirportId) {
            throw new AppError('Departure and arrival airports cannot be the same', StatusCodes.BAD_REQUEST);
        }
    }

    // filter for price
    if(query.price){
        const [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice === undefined) ? 50000: maxPrice)]
        }
    }

    // filter for travellers (based on total seats available)
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }

    // filter based on departure and arrival dates
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }

    // filter for sorting price
    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters;
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
