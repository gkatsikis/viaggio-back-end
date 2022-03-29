import { BucketList } from "../models/bucketlist.js";
import { Profile } from '../models/profile.js'

// function index (req, res) {
//   BucketList.find({})
//   .then(bucketlists => {
//     res.json(bucketlists)
//   })
//   .catch(err => {
//    console.log(err)
//     res.json(err)
//   })
// }

function create(req, res) {
  BucketList.create(req.body)
  .then(bucketlist => res.json(bucketlist))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

// function show(req, res) {
//   BucketList.findById(req.params.id)
//   .then(bucketlist => res.json(bucketlist))
//   .catch(err =>{
//     console.log(err)
//     res.json(err)
//   })
// }

// function update(req, res) {
//   BucketList.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   .then(bucketlist => res.json(bucketlist))
//   .catch(err => {
//     console.log(err)
//     res.json(err)
//   })
// }

// function deleteBucketList(req, res) {
//   BucketList.findByIdAndDelete(req.params.id)
//   .then(bucketlist => res.json(bucketlist))
//   .catch(err => {
//     console.log(err)
//     res.json(err)
//   })
// }

export {
  // index,
  create,
  // show,
  // update,
  // deleteBucketList as delete
  
}
