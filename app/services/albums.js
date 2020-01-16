const { api } = require('./config');

module.exports.getAlbums = () =>
  api
    .get('/albums')
    .then(response => console.log(response))
    .catch(error => console.log(error));
