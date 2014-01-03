var thing = {

  create: function(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
  },

  // Fake async method
  asyncCreate: function(key, value, cb) {
    setTimeout(function() {
      cb(thing.create(key, value));
    }, 500);
  }

};

module.exports = thing;