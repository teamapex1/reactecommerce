import dbConnect from '/lib/dbConnect'
import Manufacturer from '/models/Manufacturer'
import validateaddInput from '/validation/manufacturer'

export default async function handler (req, res) {
	
	
  
  const { method } = req


  await dbConnect()

  switch (method) {
    case 'POST':
      try {
		  
		const { errors, isValid } = validateaddInput(req.body);
		// Check validation
		  if (!isValid) {
			return res
			//.status(400)
			.json(errors);
		  }  
		  
		  const newManu = new Manufacturer({
			name: req.body.name,
			description: req.body.description
		  });
		  
		   try {
				const manufacturer = Manufacturer.create(newManu)
				res.status(201).json({ success: true, data: manufacturer });
			} catch (error) {
				res.status(400).json({ error: error, success: false })
			}
			
		  
       
      } catch (error) {
        res.status(400).json({ error: error, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}