
const { AirIndiaRepository } = require('../repositories');

const airindiaRepository = new AirIndiaRepository();

async function createAirIndia(data){
    try {
        const airindia = await airindiaRepository.create(data);
        return airindia;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirIndia
}
