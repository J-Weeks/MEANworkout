var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('workoutlist', ['workoutlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/workoutlist', function(req, res){
  console.log('Request got');

  db.workoutlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });

});

app.post('/workoutlist', function(req, res){
  console.log(req.body);
  db.workoutlist.insert(req.body, function(err,doc){
    res.json(doc);
  });
});

app.delete('/workout/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.workoutlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/workoutlist/:id', function(req,res){
  var id = req.params.id;
  db.workoutlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.put('/workoutlist/:id', function(req, res){
  var id = req.params.id;
  db.workoutlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {workout: req.body.workout, sets: req.body.sets, reps: req.body.reps}},
    new: true}, function(err, doc){
      res.json(doc);
    });
});

app.listen(3000);
console.log('server running on port 3000');
