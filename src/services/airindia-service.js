
const { StatusCodes } = require('http-status-codes');
const { AirIndiaRepository } = require('../repositories');

const airindiaRepository = new AirIndiaRepository();
const AppError = require('../utils/errors/app-error')

async function createAirIndia(data){
    try {
        const airindia = await airindiaRepository.create(data);
        return airindia;
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
        throw new AppError('Cannot create a new AirIndia object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllAirplanes(params) {
    try {
        const airplanes = await airindiaRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirIndia,
    getAllAirplanes
}
