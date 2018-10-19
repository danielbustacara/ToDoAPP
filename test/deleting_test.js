const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test
describe('Deleting Records Test', function(){

  var char;

  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 60
    });

    char.save().then(function(){
      done();
    });
  });

  //find test
  it('Deletes one record from the database', function(done){

    MarioChar.findOneAndDelete({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });

  });

});
