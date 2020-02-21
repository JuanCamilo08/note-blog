require('./startup/db')();

const express = require('express');
const app = express();

require('express-async-errors');

//routes
require('./startup/routes')(app);

const port = process.env.NODE_ENV || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
