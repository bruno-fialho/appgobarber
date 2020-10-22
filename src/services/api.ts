import axios from 'axios';

const api = axios.create({
  // Use localhost with tcp reverse, otherwise use 10.0.2.2
  baseURL: 'http://localhost:3333',
});

export default api;
