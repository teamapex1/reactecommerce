import dbConnect from '/lib/dbConnect'
import Serial from '/models/Serial'
import validateaddInput from '/validation/serial'


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
		  
		  const newSerial = new Serial({
			name: req.body.name,
			manufacturer_id: req.body.manufacturer_id
		  });
		  
			const serial = Serial.create(newSerial)
			res.status(201).json({ success: true, data: serial })
		  
       
      } catch (error) {
        res.status(400).json({ error: error, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}