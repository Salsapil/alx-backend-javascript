const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM, 100, 20 and return 10', function () {
    // Stub Utils.calculateNumber to return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct output
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and spy
    stub.restore();
    consoleSpy.restore();
  });
});
