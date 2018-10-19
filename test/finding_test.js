const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test
describe('Finding Records Test', function(){

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
  it('Finds one record from the database', function(done){

    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  });

  //find by id test
  it('Finds record by id from the database', function(done){

    MarioChar.findOne({ _id: char._id}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  });

});
