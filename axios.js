import axios from 'axios'

const localUrl = 'http://127.0.0.1:8000/api/'
const ipUrl = 'http://192.168.88.7/lcs/public/api/'
const liveServerUrl = 'http://127.0.0.1:8000/api/'
const testServerUrl = 'https://land-consultancy.gsmcltd.com/api/'


let AXIOS = axios.create({
    baseURL: testServerUrl,
    timeout: 10000,
    Accept: 'application/json', 
});


AXIOS.interceptors.request.use(function (config) {

    const TOKEN = localStorage.getItem('token')
   
    if (TOKEN) {
        // console.log(TOKEN);
        // instance.defaults.headers.post['Authorization'] = `Bearer ${TOKEN}`;
        // instance.defaults.headers.post['Content-Type'] = 'application/json';
        // instance.defaults.headers.post['Accept'] = "application/json";

        config.headers['Authorization'] = `Bearer ${TOKEN}`;
        
        // config.headers['Content-Type'] = 'application/json';
        // config.headers.Accept = `application/json`;
        // config.headers.Content-Type = `Bearer ${TOKEN}`;
        // config.headers.common['Accept'] = "application/json";
        // config.headers.common['Content-Type'] = "application/json";
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default AXIOS

    // const defaultOptions = {
    //   baseURL: ipUrl,
    // //   headers: {
    // //     'Content-Type': 'application/json',
    // //   },
    // };
  
    // Create instance
//     let instance = axios.create({
//         baseURL: ipUrl,
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       });
  
//     // Set the AUTH token for any request
//     instance.interceptors.request.use(function (config) {
//       const token = localStorage.getItem('token');
//       config.headers.Authorization =  token ? `Bearer ${token}` : '';
//       return config;
//     },
//     function (error) {
//         //     // Do something with request error
//             return Promise.reject(error);
//         // }
//     });
  
  
//   export default instance;
