import dbConnect from '/lib/dbConnect'
import Color from '/models/Color'
import validateaddInput from '/validation/Color'


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

		const { id } = req.query
		
		  
			Color.updateOne({_id: id }, 
			{ name: req.body.name }).then(result => {
				res.status(201).json({ success: true })
			});
		
      } catch (error) {
        res.status(400).json({ error:  req.query, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}