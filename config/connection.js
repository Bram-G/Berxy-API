const { connect, connection } = require('mongoose');

connect('mongodb://localhost/berxyapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;