'use strict';

var _ = require('lodash');
var createBots = require('./node_modules/challenge/createBots.js');
var possibleToWin = require('./node_modules/challenge/possibleToWin.js');
var winGame = require('./node_modules/challenge/winGame.js');
var readData = require('./node_modules/challenge/readData.js');

//Reading data
(function index () {
  readData(function (data) {
    var lines = data.trim().split("\n");
    var firingRange = parseInt(lines[0]);
    var bots = createBots(_.drop(lines));

//Kill all bots, 1st check if the game is beatable and if its beatable we
//proceed to win, if not, we return its unbeatable
    possibleToWin(bots) ? winGame(lines, firingRange, bots) :
      console.log("Is not possible to win this game");
  });
}).call(this);
