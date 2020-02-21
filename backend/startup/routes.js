const express = require('express');
const morgan = require('morgan');
const noteRoutes = require('../routes/notes');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use('/api/note', noteRoutes);
  app.use(error);
};
