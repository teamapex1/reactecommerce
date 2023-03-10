import dbConnect from '/lib/dbConnect'
import Category from '/models/Category'
import validateaddInput from '/validation/category'


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

		const { id } = req.query
		
		  
			Category.updateOne({_id: id }, 
			{ name: req.body.name,description: req.body.description }).then(result => {
				res.status(201).json({ success: true })
			});
		  
		 /* Category.findOne({ name: req.body.name }).then(catexist => {
			if (catexist) {
			  return res.status(400).json({ name: "name already exists" });
			} else {
				const newCategory = new Category({
					name: req.body.name,
					description: req.body.description
				});
				const category = Category.create(newCategory)
				res.status(201).json({ success: true, data: category })
			}
		  });*/
      } catch (error) {
        res.status(400).json({ error:  req.params.id, success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}