let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('countRegNumber function', function(){
  it('Should return the string parameter', function(){
    var number = "CA 234"
    assert.equal(countRegNumber("CA 234"), true);
  });
it('Should return the lenght of the parameter', function(){
assert.equal(countRegNumber('CA 3455, LC 854, PL 526, GC'), 4);
});
});
