import axios from 'axios'

const url = 'http://localhost:3000/users'

export const getUsers = () => {
  return axios.get(url)
}

export const createUser = (newUser) => {
  return axios.post(url, newUser)
}

export const updateUser = () => {}

export const deleteUser = (id) => {
  return axios.delete(`${url}/${id}`)
}