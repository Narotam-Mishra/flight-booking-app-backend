
const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, City } = require('../models');
const { Sequelize } = require('sequelize');

const db = require('../models');
const { addRowLockOnFlights } = require('./queries');

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
              as: "airplane_detail",
            },
            {
              model: Airport,
              required: true,
              as: "departure_airport",
              on: {
                col1: Sequelize.where(
                  Sequelize.col("Flight.departureAirportId"),
                  "=",
                  Sequelize.col("departure_airport.airportCode")
                ),
              },
              include: {
                model: City,
                required: true,
              },
            },
            {
              model: Airport,
              required: true,
              as: "arrival_airport",
              on: {
                col1: Sequelize.where(
                  Sequelize.col("Flight.arrivalAirportId"),
                  "=",
                  Sequelize.col("arrival_airport.airportCode")
                ),
              },
              include: {
                model: City,
                required: true,
              },
            },
          ],
        });
        // console.log("Filter Response:", response);
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec = true) {
      // raw SQL query that will put row lock
      await db.sequelize.query(addRowLockOnFlights(flightId));

      const flight = await Flight.findByPk(flightId);
      if(parseInt(dec)){
        await flight.decrement('totalSeats', { by: seats });
      }else{
        await flight.increment('totalSeats', { by: seats });
      }
      return flight;
    }
}

module.exports = FlightRepository;