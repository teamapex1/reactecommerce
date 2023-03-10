import dbConnect from '/lib/dbConnect'
import User from '/models/User'
import validateLoginInput from "/validation/login";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("/config/keys");

export default async function handler (req, res) {
	
	
  
  const { method } = req
  const { pid } = req.query

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
		  
		  // Form validation
		const { errors, isValid } = validateLoginInput(req.body);
		// Check validation
		  if (!isValid) {
			return res.status(400).json(errors);
		  }
		const email = req.body.email;
		  const password = req.body.password; 
		  
		   User.findOne({ email }).then(user => {
			    // Check if user exists
				if (!user) {
				  return res.status(404).json({ emailnotfound: "Email not found" });
				}
				else{
					    bcrypt.compare(password, user.password).then(isMatch => {
						  if (isMatch) {
							// User matched
							// Create JWT Payload
							const payload = {
							  id: user.id,
							  name: user.name
							};
					// Sign token
							jwt.sign(
							  payload,
							  keys.secretOrKey,
							  {
								expiresIn: 31556926 // 1 year in seconds
							  },
							  (err, token) => {
								res.json({
								  success: true,
								  token: "Bearer " + token
								});
							  }
							);
						  } else {
							return res
							  .status(400)
							  .json({ passwordincorrect: "Password incorrect" });
						  }
						});
				
				}			
				
	
			});
		  
       
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}