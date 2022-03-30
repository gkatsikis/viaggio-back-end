import { Location } from '../models/location.js'

function create (req, res) {
  // req.body.owner = req.user.profile
  console.log('DOES IT WOOOOORK????')
  Location.create(req.body)
  .then(location => {
    res.json(location)
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  })
}

export {
  create,
}