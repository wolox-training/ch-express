const { getAlbums, getAlbumsById } = require('./controllers/albums');
const { getPhotos } = require('./controllers/photos');
const { healthCheck } = require('./controllers/healthCheck');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:albumId', getAlbumsById);
  app.get('/photos', getPhotos);
};
