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
			.status(400)
			.json(errors);
		  }  
		  
		  const newColor = new Color({
			name: req.body.name
		  });
		  
			const color = Color.create(newColor)
			res.status(201).json({ success: true, data: color })
		  
       
      } catch (error) {
        res.status(400).json({ error: error, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}