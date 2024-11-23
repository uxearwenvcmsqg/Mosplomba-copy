// axiosIstance.ts
import axios from 'axios';
import { baseUrl } from './_BASE';

const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
