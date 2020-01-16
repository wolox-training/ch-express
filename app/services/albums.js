const { api } = require('./config');

exports.getAlbums = () =>
  api
    .get('/albums')
    .then(response => response)
    .catch(error => error);
