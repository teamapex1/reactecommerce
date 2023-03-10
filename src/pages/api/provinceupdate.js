import dbConnect from '/lib/dbConnect'
import Province from '/models/Province'
import validateaddInput from '/validation/province'

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
			.status(400)
			.json(errors);
		  }  
		  
		  const { id } = req.query
		  Province.updateOne({_id: id }, 
				{name: req.body.name }).then(result => {
				res.status(201).json({ success: true })
			});
		  
       
      } catch (error) {
        res.status(400).json({ error: error, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}