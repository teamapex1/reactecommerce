const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateAddInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
 
// Name checks
  if(Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if(!Validator.isLength(data.name, { min: 3, max: 100 })) {
    errors.name = "Name must be at least 3 characters";
  }

  

return {
    errors,
    isValid: isEmpty(errors)
  };
};