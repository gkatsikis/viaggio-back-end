import mongoose from 'mongoose'

const Schema = mongoose.Schema

const locationSchema = new Schema({
  destName: {type: String, required: true},
  location: {type: String, required: true},
  category: {type: String, required: true, default: 'beach'},
}, {
  timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

export {
  Location
}