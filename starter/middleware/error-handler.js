const { CustomAPIError, createCustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({err.message});
    }
  return res.status(500).json({ msg: "Something went wrong!!!!" });
};
module.exports = errorHandler;
