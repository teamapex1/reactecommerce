import dbConnect from '/lib/dbConnect'
import User from '/models/User'
import validateRegisterInput from '/validation/register'
const bcrypt = require("bcryptjs");

export default async function handler (req, res) {
	
	
  
  const { method } = req
  const { pid } = req.query

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
		  
		const { errors, isValid } = validateRegisterInput(req.body);
		// Check validation
		  if (!isValid) {
			return res
			//.status(400)
			.json(errors);
		  }  
		  
		   const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		  });
		  
		   bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
           const user = User.create(newUser)
			res.status(201).json({ success: true, data: user })
        });
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