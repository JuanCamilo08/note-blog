const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const noteRoutes = require('../routes/notes');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));
  app.use('/api/note', noteRoutes);
  app.use(error);
};
