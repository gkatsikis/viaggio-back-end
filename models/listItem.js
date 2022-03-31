import mongoose from 'mongoose'

const Schema = mongoose.Schema

const listItemSchema = new Schema({
  location: {type: String},
  season: {type: String},
  todo: {type: String},
  fulfilled: {type: Boolean},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
})

const ListItem = mongoose.model('ListItem', listItemSchema)

export {
  ListItem
}