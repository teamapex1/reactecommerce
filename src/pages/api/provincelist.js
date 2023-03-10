import dbConnect from '/lib/dbConnect'
import Province from '/models/Province'
export default async function handler (req, res) {
	
	
  
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const provinces = await Province.find({})
        res.status(200).json({ success: true, data: provinces })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}