import dbConnect from '/lib/dbConnect'
import Color from '/models/Color'
export default async function handler (req, res) {
	
	
  
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const colors = await Color.find({})
        res.status(200).json({ success: true, data: colors })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}