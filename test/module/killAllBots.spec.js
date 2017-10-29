'use-strict'

var should = require('should');
var killAllBots = require('../../node_modules/challenge/killAllBots.js');

describe('killAllBots', function() {
  describe('should', function() {

    it('should return to type number', function (done) {
      var input = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      killAllBots(50, input, false).should.be.type('number');
      done();
    });
    it('should return the number of turn', function (done) {
      var input = [['EnemyD', 30, 30, 1], ['EnemyF', 30, 20, 2], ['EnemyE', 500, 75, 7], ['EnemyA', 100, 10, 10], ['EnemyC', 1100, 55, 20]];

      (20).should.match(killAllBots(55, input, false));
      done();
    });
    it('should return the number of turn', function (done) {
      var input = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      (6).should.match(killAllBots(50, input, false));
      done();
    });
    it('should return the number of turn', function (done) {
      var input = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 20, 5]];

      (4).should.match(killAllBots(50, input, false));
      done();
    });
  })
})
