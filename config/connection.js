const mong = require('mongoose');
require('dotenv').config();

mong.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/berxy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mong.connection;