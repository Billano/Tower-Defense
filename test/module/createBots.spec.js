'use-strict'

var should = require('should');
var createBots = require('../../node_modules/challenge/createBots.js');

describe('createBots', function() {
  describe('should', function() {

    it('should return to type object', function (done) {
      var input = ['BotA 100m 10m', 'BotB 50m 20m', 'BotC 30m 20m'];
      var output = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      createBots(input).should.be.type('object');
      done();
    });
    it('should return the length of 3', function (done) {
      var input = ['BotA 100m 10m', 'BotB 50m 20m', 'BotC 30m 20m'];
      var output = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      createBots(input).should.be.have.length(3);
      done();
    });
    it('should return the array splitted and organized by the last slot', function (done) {
      var input = ['EnemyA 100m 10m', 'EnemyC 1100m 55m', 'EnemyD 30m 30m', 'EnemyE 500m 75m', 'EnemyF 30m 20m'];
      var output = [['EnemyD', 30, 30, 1], ['EnemyF', 30, 20, 2], ['EnemyE', 500, 75, 7], ['EnemyA', 100, 10, 10], ['EnemyC', 1100, 55, 20]];

      output.should.match(createBots(input));
      done();
    });
    it('should return the array splitted and organized by the last slot', function (done) {
      var input = ['BotA 100m 10m', 'BotB 50m 20m', 'BotC 30m 20m'];
      var output = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      output.should.match(createBots(input));
      done();
    });
  })
})
