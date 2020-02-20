const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 50,
    default: 'sin nombrar.'
  },
  content: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 2000
  },
  creationDate: {
    type: Date,
    default: new Date(),
    required: true
  }
});

module.exports.Note = mongoose.model('note', schema);

module.exports.validationNote = function(note) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    content: Joi.string()
      .min(5)
      .max(2000)
      .required(),
    creationDate: Joi.date()
  };

  return Joi.validate(note, schema);
};
