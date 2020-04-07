const { api } = require('./config');

exports.getAlbums = async () => {
  try {
    const { data } = await api.get('/photos');
    return data;
  } catch (e) {
    return e;
  }
};
