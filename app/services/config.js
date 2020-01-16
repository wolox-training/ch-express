const axios = require('axios');

module.exports.api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});
