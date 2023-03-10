import dbConnect from '/lib/dbConnect'
import EhfCategory from '/models/EhfCategory'
export default async function handler (req, res) {
	
	
  
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const categories = await EhfCategory.find({})
        res.status(200).json({ success: true, data: categories })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}