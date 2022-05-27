const axios = require('axios');
const { API_BASE_URL } = require('./constants');


const instance = axios.create({
    baseURL: API_BASE_URL,
    
  });

  export default instance;