import { stringify } from 'qs'
import request from '../../utils/request'

export async function getToken (params) {
  return request('/api/oauth/token', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
