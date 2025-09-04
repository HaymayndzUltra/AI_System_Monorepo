/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Health check
*
* returns _health_get_200_response
* */
const healthGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  healthGET,
};
