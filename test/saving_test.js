const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test
describe('Saving Records Test', function(){

  //create test
  it('Save a record to the database', function(done){
    var char = new MarioChar({
      name: 'Mario',
      weight: 60
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

});
