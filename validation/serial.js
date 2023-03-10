const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateAddInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.manufacturer_id = !isEmpty(data.manufacturer_id) ? data.manufacturer_id : "";
 
// Name checks
  if(Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if(Validator.isEmpty(data.manufacturer_id)) {
    errors.manufacturer_id = "manufacturer field is required";
  }

  

return {
    errors,
    isValid: isEmpty(errors)
  };
};