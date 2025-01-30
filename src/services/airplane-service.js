
const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();
const AppError = require('../utils/errors/app-error')

async function createAirPlane(data){
    try {
        const airplaneRes = await airplaneRepository.create(data);
        return airplaneRes;
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
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllAirplanes(params) {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplane(id){
    try {
        const singleAirplane = await airplaneRepository.get(id);
        return singleAirplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airplane by id', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

// updateAirplane
async function updateAirplane(id, data){
    try {
        const response = await airplaneRepository.update(id, data)
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to update is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id)
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirPlane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}
