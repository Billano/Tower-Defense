'use-strict'

var should = require('should');
var newFiringRange = require('../../node_modules/challenge/newFiringRange.js');

describe('newFiringRange', function() {
  describe('should', function() {

    it('should return to type number', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m'];

      newFiringRange(10, input).should.be.type('number');
      done();
    });
    it('should return the new firing range', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m'];

      (20).should.match(newFiringRange(10, input));
      done();
    });
    it('should return the new firing range', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m', 'BotD 100m 100m'];

      (100).should.match(newFiringRange(50, input));
      done();
    });
    it('should return the new firing range', function (done) {
      var input = ['BotA 100m 20m', 'BotB 50m 20m', 'BotC 30m 20m', 'BotD 600m 100m'];

      (100).should.match(newFiringRange(50, input));
      done();
    });
  })
})
