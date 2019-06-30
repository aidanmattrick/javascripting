const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("should return an empty string when passed an empty string", () => {
    assert.strictEqual("", nameInverter(""));
  });
});

describe('nameInverter', function() {
  it("should return an a single name when passed a single name", () => {
    assert.strictEqual("name", nameInverter("name"));
  });
});

describe('nameInverter', function() {
  it("should return a single name when passed a single name with extra spaces", () => {
    assert.strictEqual("name", nameInverter(" name "));
  });
});

describe('nameInverter', function() {
  it("should return a last-name, first-name when passed a first and last-name", () => {
    assert.strictEqual("lastname, firstname", nameInverter("firstname lastname"));
  });
});

describe('nameInverter', function() {
  it("should return a last-name, first-name when passed a first and last-name with extra spaces around the names", () => {
    assert.strictEqual("last, first", nameInverter(" first last"));
  });
});

describe('nameInverter', function() {
  it("should return an empty string when passed a single honorific", () => {
    assert.strictEqual("", nameInverter("Dr. "));
  });
});

describe('nameInverter', function() {
  it("should return a honorific last-name, first-name when passed honorific first-name last-name", () => {
    assert.strictEqual("Dr. last-name, first-name", nameInverter("Dr. first-name last-name "));
  });
});

describe('nameInverter', function() {
  it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", () => {
    assert.strictEqual("Dr. last-name, first-name", nameInverter("Dr.  first-name last-name "));
  });
});

describe('nameInverter', function() {
  it("should throw an error when name is undefined", () => {
    assert.strictEqual("throw 'Error'", nameInverter(undefined));
  });
});

