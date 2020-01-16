const { api } = require('./config');

module.exports.getPhotos = () =>
  api
    .get('/photos')
    .then(response => response)
    .catch(error => error);
