
const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const city = require('./models/city');
const app = express();

// parse incoming body request (json)
app.use(express.json());

// parse incoming body request (urlencoded data)
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    
    const { City, Airport } = require('./models');

    // const city = await City.findByPk(6);
    // await city.createAirport({name: "Pune Airport", airportCode: "PNQ"});
    // await City.destroy({
    //     where: {
    //         id: 6
    //     }
    // });
})