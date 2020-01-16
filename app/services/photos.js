const { api } = require('./config');

exports.getPhotos = () =>
  api
    .get('/photos')
    .then(response => response)
    .catch(error => error);
