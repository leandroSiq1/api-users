const mongoose = require('mongoose');

function connect() {

  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);

  mongoose.connect('mongodb://localhost:27017/api-users?readPreference=primary&appname=MongoDB%20Compass&ssl=false');

  const db = mongoose.connection;

  db.once('open', () => {
    console.log("Connected to database!");
  })

  db.on('error', console.error.bind(console, 'connection error: '));
}

module.exports = {
  connect
}