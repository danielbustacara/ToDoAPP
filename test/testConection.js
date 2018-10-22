const mongoose = require('mongoose');


//ES6
mongoose.Promise = global.Promise;

//Connect to de Database
before(function(done){

  let uri = 'mongodb://daniel:Deftones92@ds037468.mlab.com:37468/danielbustacaradb';
  //let uri = 'mongodb://localhost/demodb';

  mongoose.connect(uri,{ useNewUrlParser: true });

  let db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function callback() {
    console.log('Connection has been made!!');
    done();
  });

});

// Drop the characters collection before each Test
beforeEach(function(done){

  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });

});
