import dbConnect from '/lib/dbConnect'
import EhfCategory from '/models/EhfCategory'


export default async function handler (req, res) {
	
	
  
  const { method } = req


  await dbConnect()

  switch (method) {
    case 'DELETE':
      try {
		
		
		
		
		
		  EhfCategory.deleteOne({ _id: req.body.id }).then(EhfCategoryexist => {
			 return res.status(200).json({ success: true });
		  });
		
		
	  } catch (err) {
		console.log(err);
	  }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}