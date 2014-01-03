var expect = require('chai').expect;

var thing = require('../lib/do-that-thing.js');

describe("Thing", function() {

  it("should create a new object", function() {

    var obj = thing.create('name', 'Kyle');

    expect(obj).to.deep.equal({name: 'Kyle'});

  });

  it("should create a new object asyncronously", function(done) {

    thing.asyncCreate('name', 'Kyle', function(obj) {
      expect(obj).to.deep.equal({name: 'Kyle'});
      done();
    });

  });

});