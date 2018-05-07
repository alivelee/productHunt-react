import { stringify } from 'qs'
import request from '../../utils/request'

export async function getTopics (params) {
  console.log('params', params)
  return request(`/api/topics?${stringify(params)}`, {
    method: 'GET'
  })
}

export async function getTopicDetail (params) {
  console.log('params', params)
  return request(`/api/posts/all?${stringify(params)}`, {
    method: 'GET'
  })
}
