import * as axios from 'axios'

const APIurl = 'https://social-network.samuraijs.com/api/1.0/';

export const APIgetUsers = (currentPage, pageSize) => {

  return axios.get(APIurl + `users?page=${currentPage}&count${pageSize}`,
    {
      withCredentials: true
    }).then(response => response.data)

}

export const getAuth = () => {

  return axios.get((APIurl + 'auth/me'),
    {
      withCredentials: true
    })
}

export const APIunfollow = (userId) => {

  return axios.delete(APIurl + `follow/${userId}`,
    {
      withCredentials: true,
      headers: {'api-key': "2af87a02-ed46-4c8e-8dc4-d8f4cbd4501f"}
    })
}

export const APIfollow = (userId) => {

  return axios.post(APIurl + `follow/${userId}`, {},
    {withCredentials: true,
      headers: {'api-key': '2af87a02-ed46-4c8e-8dc4-d8f4cbd4501f'}
    })
}

export const APIsetUserProfile = (userId) => {
  return axios.get(APIurl + `profile/${userId}`)
}