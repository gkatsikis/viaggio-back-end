import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bucketlistSchema = new Schema({
  location: {type: String},
  season: {type: String},
  todo: {type: String},
  fulfilled: {type: Boolean}
})

const BucketList = mongoose.model('BucketList', bucketlistSchema)

export {
  BucketList
}