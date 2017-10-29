'use-strict'

var should = require('should');
var possibleToWin = require('../../node_modules/challenge/possibleToWin.js');

describe('possibleToWin', function() {
  describe('should', function() {

    it('should return to type boolean', function (done) {
      var input = [['BotC', 30, 20, 2], ['BotB', 50, 20, 3], ['BotA', 100, 10, 10]];

      possibleToWin(input).should.be.type('boolean');
      done();
    });
    it('should return true', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m'];

      (true).should.match(possibleToWin(input));
      done();
    });
    it('should return true', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m', 'BotD 100m 100m'];

      (true).should.match(possibleToWin(input));
      done();
    });
    it('should return false', function (done) {
      var input = ['BotA 100m 20m', 'BotB 100m 20m', 'BotC 100m 20m', 'BotD 100m 20m'];

      (true).should.match(possibleToWin(input));
      done();
    });
  })
})
