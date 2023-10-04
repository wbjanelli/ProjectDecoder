const { expect } = require('chai');
const { caesar } = require('../src/caesar.js');

describe('Caesar', () => {
  // Encoding Tests
  it('should encode a string with a positive shift', () => {
    expect(caesar('hello', 3)).to.equal('khoor');
  });

  it('should encode a string with a negative shift', () => {
    expect(caesar('world', -3)).to.equal('tloia');
  });

  it('should wrap around when shifting past the end of the alphabet', () => {
    expect(caesar('xyz', 3)).to.equal('abc');
  });

  it('should handle shifts greater than 25', () => {
    expect(caesar('a', 26)).to.equal(false);
  });

  it('should handle shifts less than -25', () => {
    expect(caesar('test', -30)).to.equal(false);
  });

  // Decoding Tests
  it('should decode a string with a positive shift when encode is false', () => {
    expect(caesar('khoor', 3, false)).to.equal('hello');
  });

  it('should decode a string with a negative shift when encode is false', () => {
    expect(caesar('tloia', -3, false)).to.equal('world');
  });

  it('should handle decoding with wrap-around when encode is false', () => {
    expect(caesar('abc', 3, false)).to.equal('xyz');
  });

  it('should handle decoding with shifts greater than 25 when encode is false', () => {
    expect(caesar('xiwx', 30, false)).to.equal(false);
  });

  it('should handle decoding with shifts less than -25 when encode is false', () => {
    expect(caesar('xliw', -30, false)).to.equal(false)
  });

  // Error Cases
  it('should return false for an invalid shift value', () => {
    expect(caesar('test', 0)).to.equal(false);
    expect(caesar('test', 26)).to.equal(false);
    expect(caesar('test', -26)).to.equal(false);
  });
});

