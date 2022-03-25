import { Post } from '../models/post.js'
import {v2 as cloudinary} from 'cloudinary'

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
  req.body.owner = req.user.profile
  if (req.body.photo === 'undefined' || !req.files['photo']) {
    delete req.body['photo']
    Post.create(req.body)
    .then(post => {
      post.populate('owner')
      .then(populatedPost => {
        res.status(201).json(populatedPost)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.photo.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      req.body.photo = image.url
      Post.create(req.body)
      .then(post => {
        post.populate('owner')
        .then(populatedPost => {
          res.status(201).json(populatedPost)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    })
  }
}

export{
  index,
  create,

}