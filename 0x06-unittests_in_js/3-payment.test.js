const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM, 100, 20', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    
    spy.restore(); // Always restore the spy after the test
  });
});
