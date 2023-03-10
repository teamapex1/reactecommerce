import dbConnect from '/lib/dbConnect'
import Serial from '/models/Serial'
export default async function handler (req, res) {
	
	
  
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const serials = await Serial.find({})
        res.status(200).json({ success: true, data: serials })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}