import { stringify } from 'qs'
import request from '../../utils/request'

export async function getTopics (params, headers) {
  console.log('params', params)
  return request(`/api/topics?${stringify(params)}`, {
    method: 'GET'
  })
}

export async function getTopicDetail (params, headers) {
  console.log('params', params)
  return request(`/api/posts/all?${stringify(params)}`, {
    method: 'GET'
  })
}
