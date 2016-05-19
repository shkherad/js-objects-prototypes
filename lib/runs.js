'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.addRun = function (date,distance,timeTaken) {
  this.runs.push (new Run (date,distance,timeTaken))
  return this
};

User.prototype.totalDistance = function () {
  let runs = this.runs;
  let result = 0;
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }
  return result
}

let shireen = new User('Shireen','shkherad@bu.edu');
shireen.addRun('05-18-2016',20,1300);

module.exports = {
  Run,
  User,
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
