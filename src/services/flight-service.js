
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


module.exports = {
    createFlight,
}
