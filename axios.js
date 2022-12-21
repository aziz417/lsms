import axios from 'axios'

const localUrl = 'http://127.0.0.1:8000/api/'
const ipUrl = 'http://192.168.88.7/land_consultancy_service/public/api/'
const liveServerUrl = 'http://127.0.0.1:8000/api/'
const testServerUrl = 'http://127.0.0.1:8000/api/'

const AXIOS = axios.create({
    baseURL: ipUrl,
    timeout: 10000,
});

AXIOS.interceptors.request.use(function (config) {
    const TOKEN = localStorage.getItem('access_token')
    if (TOKEN) {
        config.headers.common['Authorization'] = `Bearer ${TOKEN}`;
        config.headers.common['Accept'] = "application/json";
        config.headers.common['Content-Type'] = "application/json";
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default AXIOS