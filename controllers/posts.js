import { Post } from '../models/post.js'

function index (req, res) {
  Post.find({})
  // Add this line
  .populate('owner')
  .then(posts => {
    res.json(posts)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  // Add this line
  req.body.owner = req.user.profile
  Post.create(req.body)
  .then(post => res.json(post))        //check to create post
  .catch(err => res.json(err))
}

export{
  index,
  create,

}