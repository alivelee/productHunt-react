import { stringify } from 'qs'
import request from '../../utils/request'

export async function getUserInfo () {
  return request('/api/me', {
    method: 'GET'
  })
}

export async function getUserDetail (userId) {
  return request(`/api/users/${userId}`, {
    method: 'GET'
  })
}