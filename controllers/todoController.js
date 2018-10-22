var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const conexion = require('../conexion');
const ToDo = require('../models/todo');

var data;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
  app.get('/todo', function(req, res){
    ToDo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', { todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = ToDo(req.body).save(function(err,data){
        if(err) throw err;
        res.json(data);
    });
    //data.push(req.body);

  });

  app.delete('/todo/:item', function(req, res){
    ToDo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    })

    /*data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') != req.params.item;
    });*/

  });
};
