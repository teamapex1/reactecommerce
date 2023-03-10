import mongoose from 'mongoose'

const SerialSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
  },
   manufacturer_id: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.models.Serial || mongoose.model('Serial', SerialSchema)