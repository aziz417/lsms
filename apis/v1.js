import axios from "../axios.js"
export default {


   // authintation
 async login(fromData){
    return axios.post(`/login`, fromData)
 },

 async adminRegister(fromData){
    return axios.post(`/register`, fromData)
 },

 async logout(){
    return axios.post(`/logout`)
 },

 // admins
 async admins(){
   return axios.get(`/admins`)
 }
}