const { getPhotos } = require('../services/albums');

exports.getPhotos = (req, res, next) =>
  getPhotos()
    .then(data => res.status(200).send({ photos: data }))
    .catch(next);
