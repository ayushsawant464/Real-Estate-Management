import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Set the base URL for your API
  withCredentials: true // Include cookies with requests
});

export default axiosInstance;
