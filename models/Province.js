import mongoose from 'mongoose'

const ProvinceSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.models.Province || mongoose.model('Province', ProvinceSchema)