
const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();

// parse incoming body request (json)
app.use(express.json());

// parse incoming body request (urlencoded data)
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);

    const { City, Airport } = require('./models');
    const bangalore = await City.findByPk(1);
    console.log("City:", bangalore);

    const kmpAirport = await bangalore.createAirport({ name: 'Kempgowda Airport', airportCode: 'BLR'});
    console.log("Airport:", kmpAirport);  
})