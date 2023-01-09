import axios from 'axios'

const localUrl = 'http://127.0.0.1:8000/api/'
const ipUrl = 'http://192.168.88.7/lcs/public/api/'
const liveServerUrl = 'http://127.0.0.1:8000/api/'
const testServerUrl = 'http://127.0.0.1:8000/api/'


const AXIOS = axios.create({
    baseURL: ipUrl,
    timeout: 10000,
});

// const setToken = () => {

// }
// setToken();


AXIOS.interceptors.request.use(function (config) {

    const TOKEN = localStorage.getItem('token')
    // console.log(TOKEN);
    // if (TOKEN && TOKEN != 'null') {
    if (TOKEN) {
        console.log(TOKEN);
        AXIOS.defaults.headers.post['Authorization'] = `Bearer ${TOKEN}`;
        AXIOS.defaults.headers.post['Content-Type'] = 'applicrtyation/x-www-form-urlencoded';
        AXIOS.defaults.headers.post['Accept'] = "application/json";

        // config.headers.common['Authorization'] = `Bearer ${TOKEN}`;
        // config.headers.common['Accept'] = "application/json";
        // config.headers.common['Content-Type'] = "application/json";
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default AXIOS