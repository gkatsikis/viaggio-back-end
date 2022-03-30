

function create (req, res) {
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