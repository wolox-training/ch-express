const { api } = require('./config');

exports.getPhotos = async () => {
  try {
    const { data } = await api.get('/photos');
    return data;
  } catch (e) {
    return { error: e };
  }
};
