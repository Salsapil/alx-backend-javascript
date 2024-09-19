const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  // Runs before each test
  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Runs after each test
  afterEach(function () {
    consoleSpy.restore(); // Restore the spy after each test
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;
    // Verify that the correct log message was printed
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;
    // Verify that the correct log message was printed
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
