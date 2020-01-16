const axios = require('axios');

exports.api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});
