import axios from 'axios';
const api = axios.create({
    baseURL: 'https://backend-portalturismo-dkza.onrender.com/api'
})
export default api;
