import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
   name: {
    type: String,
	unique: true,
    required: true,
	
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});




module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema)