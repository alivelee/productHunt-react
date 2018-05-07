import { stringify } from 'qs'
import request from '../../utils/request'

export async function getPosts (params) {
  console.log('posts', params)
  if (!params) {
    return request(`/api/posts/all`, {
      method: 'GET'
    })
  }
  return request(`/api/posts/all?${stringify(params)}`, {
    method: 'GET'
  })
}

export async function getTechPosts () {
  return request('/api/me/feed', {
    method: 'GET'
  })
}

export async function getPostDetail (postId) {
  return request(`/api/posts/${postId}`, {
    method: 'GET'
  })
}
