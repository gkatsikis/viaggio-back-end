import mongoose from 'mongoose'

const Schema = mongoose.Schema

const locationSchema = new Schema({
  destName: {type: String, required: true},
  location: {type: String, required: true},
  category: {type: String, required: true},
}, {
  timestamps: true
})