import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.205.93:3333',
});

export default api;
