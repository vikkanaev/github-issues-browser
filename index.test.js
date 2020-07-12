const { expect } = require('chai');
const { mySum } = require('./index.js');

describe('mySum', () => {
  it('Returns sum of given numbers', () => {
    expect(mySum(2, 2)).to.equal(4);
  });
});
