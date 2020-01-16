const { api } = require('./config');

module.exports.getAlbums = () =>
  api
    .get('/albums')
    .then(response => response)
    .catch(error => error);
