class CustomAPIError extends Error {
  // create a custom error class which extends default js error class
  constructor(message, statusCode) {
    // its constructor is called whenever an object is created
    super(message); // message has all the properties with main class
    this.statusCode = statusCode; // statuscode is just passed normally
  }
}

const createCustomAPIError = (msg, statusCode) => {
  // this method creates a new object with given parameters
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomAPIError, CustomAPIError }; // both are these are connected so we need both
