import mongoose from 'mongoose'

const EhfCategorySchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.models.EhfCategory || mongoose.model('EhfCategory', EhfCategorySchema)