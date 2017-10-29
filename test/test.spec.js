'use-strict'

var should = require('should');
// var readData = require('../node_modules/challenge/readData.js');
var index = require('../index.js');
// describe('readData', function() {
//   describe('should', function() {
//     it('take a callback function', function (done) {
//       readData.should.be.a.Function();
//       done();
//     })
//     it('manipulate a string', function (data) {
//       var data = readData(function (data) {
//         dataData.should.be.a.String();
//         done();
//       });
//     })
//   })
// })
describe('index', function() {
  it('Should output, is not possible to win', function (done) {
    var output = index('40m\nBotA 50m 20m\nBotB 50m 20m\nBotC 50m' +
    '20m\nBotD 50m 20m\n');
    assert.equal(output, 'Is not possible to win this game');
    done();
  })
})
