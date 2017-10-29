'use strict';

var _ = require('lodash');
var createBots = require('./node_modules/challenge/createBots.js');
var winGame = require('./node_modules/challenge/winGame.js');
var readData = require('./node_modules/challenge/readData.js');

//Reading data
(function () {
  readData(function (data) {
    var lines = data.trim().split("\n");
    var firingRange = parseInt(lines[0]);
    var bots = createBots(_.drop(lines));

//after parsing the input data we proceed the win the game
    winGame(lines, firingRange, bots);
  });
}).call(this);
