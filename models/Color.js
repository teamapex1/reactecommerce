import mongoose from 'mongoose'

const ColorSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.models.Color || mongoose.model('Color', ColorSchema)