
const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter){
        const response = await Flight.findAll({
            where: filter
        })
        // console.log("Filter Response:", response);
        return response;
    }
}

module.exports = FlightRepository;