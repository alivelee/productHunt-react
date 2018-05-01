import { stringify } from 'qs'
import request from '../../utils/request'

export async function getTopics (params, headers) {
  console.log('params', params, headers)
  return request(`/api/topics?${stringify(params)}`, {
    method: 'GET',
    headers
  })
}
