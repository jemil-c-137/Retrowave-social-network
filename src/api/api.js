import * as axios from 'axios'

const instance = axios.create( {
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'api-key': "dccd3be0-aca0-4fd8-964b-6e599dd34ba7"},
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count${pageSize}`).then(response => response.data)
  },
  followAPI(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowAPI(userId) {
    return instance.delete(`follow/${userId}`)
  }
}

export const profileAPI = {
  setUser(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  },

  getAuth() {
    return instance.get('auth/me')
  },
  authLogin(email, password, rememberMe = false) {

    return instance.post('auth/login', {email, password, rememberMe})
  },
  authLogout() {
    return instance.delete('auth/login')
  }
}


export const  authApi = {
  me() {
    return instance.get('auth/me')
  },
  logIn(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logOut() {
    return instance.delete('auth/login')
  }

}