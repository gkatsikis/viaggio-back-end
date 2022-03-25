import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {type: String, required: true},
  story: {type: String, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  postPhoto: {type: String}
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {Post}