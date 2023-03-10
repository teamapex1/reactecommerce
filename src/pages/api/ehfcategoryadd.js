import dbConnect from '/lib/dbConnect'
import EhfCategory from '/models/EhfCategory'
import validateaddInput from '/validation/EhfCategory'

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
		  
		  const newEhfCategory = new EhfCategory({
			name: req.body.name
		  });
		  
			const ehfsdCategory = EhfCategory.create(newEhfCategory)
			res.status(201).json({ success: true, data: ehfsdCategory })
		  
       
      } catch (error) {
        res.status(400).json({ error: error, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}