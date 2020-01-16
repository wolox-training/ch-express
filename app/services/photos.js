const { api } = require('./config');

module.exports.getPhotos = () =>
  api
    .get('/photos')
    .then(response => console.log(response))
    .catch(error => console.log(error));
