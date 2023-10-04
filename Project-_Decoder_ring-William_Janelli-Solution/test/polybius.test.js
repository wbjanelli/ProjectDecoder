const { expect } = require('chai');
const { polybius } = require('../src/polybius.js');

describe('Polybius', () => {
  // Encoding Tests
  it('should encode a message by translating each letter to number pairs', () => {
    const input = 'he';
    const expectedOutput = '3251';
    expect(polybius(input, true)).to.equal(expectedOutput);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const input = 'ij';
    const expectedOutput = '4242';
    expect(polybius(input, true)).to.equal(expectedOutput);
  });

  it('should leave spaces as is during encoding', () => {
    const input = ' ';
    const expectedOutput = ' ';
    expect(polybius(input, true)).to.equal(expectedOutput);
  });

  // Decoding Tests
  it('should decode a message by translating each pair of numbers into a letter', () => {
    const input = '55';
    const expectedOutput = 'z';
    expect(polybius(input, false)).to.equal(expectedOutput);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const input = '42';
    const expectedOutput = '(i/j)';
    expect(polybius(input, false)).to.equal(expectedOutput);
  });

  it('should leave spaces as is during decoding', () => {
    const input = '11 11';
    const expectedOutput = 'a a';
    expect(polybius(input, false)).to.equal(expectedOutput);
  });

  it('should return false if the length of all numbers is odd', () => {
    const input = '421';
    expect(polybius(input, false)).to.be.false;
  });

  // Edge Case Tests
  it('should ignore uppercase characters during encoding', () => {
    const input = 'Hello World';
    const expectedOutput = '3251131343 2543241341';
    expect(polybius(input, true)).to.equal(expectedOutput);
  });

});
// Write your tests here!
