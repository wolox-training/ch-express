const { getAlbums, getAlbumsById } = require('../services/albums');

exports.getAlbums = (req, res, next) =>
  getAlbums()
    .then(data => res.status(200).send({ albums: data }))
    .catch(next);

exports.getAlbumsById = (req, res, next) =>
  getAlbumsById(req.params.albumId)
    .then(data => res.status(200).send({ album: data }))
    .catch(next);
