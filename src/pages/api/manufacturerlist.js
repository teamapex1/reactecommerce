import dbConnect from '/lib/dbConnect'
import Manufacturer from '/models/Manufacturer'
export default async function handler (req, res) {
	
	
  
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const manufacturers = await Manufacturer.find({})
        res.status(200).json({ success: true, data: manufacturers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}