const axios = require('axios');
const { BASE_URL_TIMEOUT } = require('./constants');

exports.api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: BASE_URL_TIMEOUT
});
