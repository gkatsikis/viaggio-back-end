import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const show = async (req, res) => {
  console.log('Show function')
  try {
    const profile = await Profile.findById(req.params.id)
    .populate('posts')
    return res.status(200).json(profile)
  } catch (err) {
    console.log('What is err:', err)
    return res.status(500).json(err)
  }
}

export { 
  index,
  show
}
