import { Post } from '../models/post.js'

function index (req, res) {
  console.log('INDEX')
  Post.find({})
  // .populate('')
  .then(posts => {
    res.json(posts)
  })
  .catch(err => {
    console.log('ERROR', err)
    res.json(err)
  })
}

function create(req, res) {
  console.log('CREATE')
  // req.body.owner = req.user.profile
  Post.create(req.body)
  .then(post => res.json(post))        //check to create post
  .catch(err => res.json(err))
}

export{
  index,
  create,

}