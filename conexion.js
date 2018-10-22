const mongoose = require('mongoose');


//ES6
mongoose.Promise = global.Promise;

//Connect to de Database
let uri = 'mongodb://daniel:Deftones92@ds037468.mlab.com:37468/danielbustacaradb';

var conexion = mongoose.connect(uri,{ useNewUrlParser: true });

  let db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function callback() {
    console.log('Connection has been made!!');
  });

module.exports = conexion;
