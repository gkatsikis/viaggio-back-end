import { Location } from '../models/location.js'

function create (req, res) {
  Location.create(req.body)
  .then(location => {
    res.json(location)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index (req, res) {
  Location.find({})
  .then(locations => {
    res.json(locations)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  create,
  index,
}