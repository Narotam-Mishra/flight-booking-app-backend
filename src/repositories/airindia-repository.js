
const CrudRepository = require('./crud-repository');
const { AirIndia } = require('../models');

class AirIndiaRepository extends CrudRepository {
    constructor(){
        super(AirIndia);
    }
}

module.exports = AirIndiaRepository;