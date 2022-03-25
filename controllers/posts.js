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
  console.log(req.files, req.body)
  req.body.owner = req.user.profile
  if (req.body.postPhoto === 'undefined' || !req.files['postPhoto']) {
    delete req.body['postPhoto']
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
    console.log(req.files.postPhoto, 'postPhoto')
    const imageFile = req.files.postPhoto.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      req.body.postPhoto = image.url
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

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    .populate('owner')
    return res.status(200).json(post)
  } catch (err) {
    return res.status(500).json(err)
  }
}


export{
  index,
  create,
  show,
}