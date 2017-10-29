'use-strict'

var should = require('should');
var index = require('../index.js');

describe('index', function() {
  it('Should be a function', function (done) {

    index.should.be.type('function');
    done();
  })
})
