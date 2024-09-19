const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify that the response is the expected object
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the test is complete
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });
});
