import { ListItem } from "../models/listItem.js";
import { Profile } from '../models/profile.js'

function index (req, res) {
  ListItem.find({owner: req.user.profile})
  .then(listItems => {
    res.json(listItems)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  ListItem.create(req.body)
  .then(listItem => res.json(listItem))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  ListItem.findById(req.params.id)
  .then(listItem => res.json(listItem))
  .catch(err =>{
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  ListItem.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(listItem => res.json(listItem))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteListItem(req, res) {
  ListItem.findByIdAndDelete(req.params.id)
  .then(listItem => res.json(listItem))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create,
  show,
  update,
  deleteListItem as delete
}
