
const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating airport request";
    ErrorResponse.error = new AppError(["Airport Name not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.airportCode) {
    ErrorResponse.message = "Something went wrong while creating airport request";
    ErrorResponse.error = new AppError(["Airport code not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating airport request";
    ErrorResponse.error = new AppError(["City Id not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest
}