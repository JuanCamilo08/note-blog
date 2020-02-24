const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
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
  },
  modifiedDate: Date
});

module.exports.Note = mongoose.model('note', schema);

module.exports.validationNote = function(note) {
  const schema = {
    content: Joi.string()
      .min(5)
      .max(2000)
      .required(),
    creationDate: Joi.date(),
    modifiedDate: Joi.date()
  };

  return Joi.validate(note, schema);
};
