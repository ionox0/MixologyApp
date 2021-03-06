'use strict';
var FirstQuestion = require('../models/FirstQuestion');
var SecondQuestion = require('../models/SecondQuestion');

// exports.collection = function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   User.find({}, function(err, users) {
//     if(err) {
//       res.send(500, {'error': err});
//     } else {
//       res.send(JSON.stringify(users));
//     }
//   });
// };

exports.getFirstQuestion = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  FirstQuestion.count({}, function(err, count){
    var rand = Math.ceil(Math.random()*count);
    FirstQuestion.findOne({ random: rand }, function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

exports.getSecondQuestion = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  SecondQuestion.count({}, function(err, count){
    var rand = Math.ceil(Math.random()*count);
    SecondQuestion.findOne({ random: rand }, function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

// Uncomment here and in Server.js for optional create question routes:
//
// exports.createFirstQuestion = function(req, res) {
//   FirstQuestion.count({}, function(err, count){
//     console.log(req.body);
//     req.body.random = count + 1;
//     var question = new FirstQuestion(req.body);
//     question.save(function(err, responseQuestion) {
//       if(err) {
//         res.send(500, {'error': err});
//       } else {
//         res.send(responseQuestion);
//       }
//     });
//   });
// };

// exports.createSecondQuestion = function(req, res) {
//   SecondQuestion.count({}, function(err, count){
//     req.body.random = count + 1;
//     var question = new SecondQuestion(req.body);
//     question.save(function(err, responseQuestion) {
//       if(err) {
//         res.send(500, {'error': err});
//       } else {
//         res.send(responseQuestion);
//       }
//     });
//   });
// };

