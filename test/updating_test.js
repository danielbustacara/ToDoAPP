const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test
describe('Updating Records Test', function(){

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
  it('Updates one record from the database', function(done){

    MarioChar.findOneAndUpdate({ _id: char._id},{name: 'Luigi'}).then(function(){
      MarioChar.findOne({name: 'Luigi'}).then(function(result){
        assert(result.name === 'Luigi');
        done();
      });
    });

  });

});
