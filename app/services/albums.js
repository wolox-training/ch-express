const { api } = require('./config');

exports.getAlbums = async () => {
  try {
    const { data } = await api.get('/albums');
    return data;
  } catch (e) {
    return { error: e };
  }
};
