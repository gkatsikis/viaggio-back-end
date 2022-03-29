import { BucketList } from "../models/bucketlist.js";
import { Profile } from '../models/profile.js'

function create(req, res) {
  BucketList.create(req.body)
  .then(bucketlist => res.json(bucketlist))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


export {
  create,
}
