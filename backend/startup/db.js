const mongoose = require('mongoose');

module.exports = async function() {
  try {
    let db = await mongoose.connect('mongodb://localhost:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    if (db) console.log('Connected to mongoDb...');
  } catch (ex) {
    console.log(ex);
  }
};
