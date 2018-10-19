const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting', function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });
  it('Creates an author with subdocuments', (done) => {

    var pat = new Author({
      name: 'Gabriel Garcia Marquez',
      books: [{title:'Cien años de soledad', pages: 350}]
    });

    pat.save().then(function(){
      Author.findOne({name:'Gabriel Garcia Marquez'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it('Add a book to an author ', (done) => {

    var pat = new Author({
      name: 'Gabriel Garcia Marquez',
      books: [{title:'Cien años de soledad', pages: 350}]
    });

    pat.save().then(function(){
      Author.findOne({name:'Gabriel Garcia Marquez'}).then(function(record){
        //add  a book
        record.books.push({title: 'Cronica de una muerte anunciada', pages: 200});
        record.save().then(function(){
          Author.findOne({name:'Gabriel Garcia Marquez'}).then(function(result){
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });

});
