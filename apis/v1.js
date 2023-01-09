import axios from "../axios.js"
export default {
   // authintation
   async register(fromData) {
      return axios.post(`/register`, fromData)
   },

   async login(fromData) {
      return axios.post(`/login`, fromData)
   },

   async profileApi() {
      return axios.get(`/profile`)
   },

   async profileExperianceDelete(id) {
      return axios.delete(`/profile/experience/${id}/delete`)
   },

   async profileAcademicDelete(id) {
      return axios.delete(`/profile/academic_qualification/${id}/delete`)
   },

   async profileUpdate(fromData) {
      return axios.post(`/profile/update`, fromData)
   },

   async passwordChange(fromData) {
      return axios.post(`/password/change`, fromData)
   },

   async adminRegister(fromData) {
      return axios.post(`/register`, fromData)
   },

   async logout() {
      return axios.post(`/logout`)
   },

   // admins
   async admins() {
      return axios.get(`/admins`)
   },
   async adminConsultants() {
      return axios.get(`/admin/consultants`)
   },

   async deleteItems(endPoint, ids) {
      return axios.post(`${endPoint}`, ids)
   }
}