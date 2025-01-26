
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
})