
const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport } = require('../models');
const { Sequelize } = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                },
                {
                    model: Airport,
                    required: true,
                    // as: "DepartureAirport",
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("Airport.airportCode")),
                    },
                }
            ]
        })
        // console.log("Filter Response:", response);
        return response;
    }
}

module.exports = FlightRepository;