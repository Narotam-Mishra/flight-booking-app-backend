

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Flight Number, i.e flightNumber, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Airplane Id, i.e airplaneId, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Departure Airport Id, i.e departureAirportId, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Arrival Airport Id, i.e arrivalAirportId, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Arrival time, i.e arrivalTime, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Departure time, i.e departureTime, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["price not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight request";
    ErrorResponse.error = new AppError(["Total number of seats, i.e totalSeats, not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  next();
}

function validateUpdateSeatsRequest(req, res, next){
  if (!req.body.seats) {
    ErrorResponse.message = "Something went wrong while updating flight seats";
    ErrorResponse.error = new AppError(["seats not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}