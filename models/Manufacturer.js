import mongoose from 'mongoose'

const manufacturerSchema = new mongoose.Schema({
   name: {
    type: String,
	unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.models.Manufacturer || mongoose.model('Manufacturer', manufacturerSchema)