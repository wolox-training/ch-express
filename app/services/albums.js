const { api } = require('./config');

exports.getAlbums = async () => {
  try {
    const { data } = await api.get('/albums');
    return data;
  } catch (e) {
    return { error: e };
  }
};

exports.getAlbumsById = async albumId => {
  try {
    const { data } = await api.get(`/albums/${albumId}/photos`);
    return data;
  } catch (e) {
    return { error: e };
  }
};
