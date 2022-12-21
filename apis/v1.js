import axios from "../axios.js"
export default {
 async login(fromData){
    return axios.post(`/login`, fromData)
 },

 async logout(){
    return axios.post(`/logout`)
 }
}