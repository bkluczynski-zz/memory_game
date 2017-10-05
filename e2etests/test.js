/* global describe, it, browser */
const expect = require('chai').expect;

describe('MemoryGame App', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Memory Game');
  })
})
