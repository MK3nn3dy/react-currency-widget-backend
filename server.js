// configure environment variables
require('dotenv').config();

// imports
const express = require('express');
const ratesRoute = require('./routes/exchangeRates');


// create app
const app = express();

// middleware
// log request during development - can be removed in production - MK
app.use((req, res, next) => {
    console.log(`The request path: ${req.path}`);
    console.log(`The request method: ${req.method}`);
    next();
})

// root request
app.use('/api/rates', ratesRoute);

// listen
app.listen(process.env.PORT, () => {
    console.log(`Exchange rates React widget now listening on port ${process.env.PORT}!`);
});