
const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');

const airportRepository = new AirportRepository();
const AppError = require('../utils/errors/app-error')

async function createAirport(data){
    try {
        const airportRes = await airportRepository.create(data);
        return airportRes;
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
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllAirports(params) {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id){
    try {
        const singleAirport = await airportRepository.get(id);
        return singleAirport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport by id', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

// updateAirport
async function updateAirport(id, data){
    try {
        const response = await airportRepository.update(id, data)
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to update is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id)
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
