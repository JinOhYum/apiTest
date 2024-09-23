const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      error: errors.array()
    });
  } else {
    next();
  }
};


