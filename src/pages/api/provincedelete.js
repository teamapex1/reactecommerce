import dbConnect from '/lib/dbConnect'
import Province from '/models/Province'


export default async function handler (req, res) {
	
	
  
  const { method } = req


  await dbConnect()

  switch (method) {
    case 'DELETE':
      try {
		
		
		
		
		
		  Province.deleteOne({ _id: req.body.id }).then(Provinceexist => {
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