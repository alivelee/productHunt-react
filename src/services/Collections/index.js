import { stringify } from 'qs'
import request from '../../utils/request'

export async function getFeaturedCollection (params, headers) {
  console.log('params', params, headers)
  return request(`/api/collections?${stringify(params)}`, {
    method: 'GET',
    headers
  })
}

export async function getCollections (params, headers) {
  console.log('params', params, headers)
  return request(`/api/collections?${stringify(params)}`, {
    method: 'GET',
    headers
  })
}

export async function getCollectionDetail (collectionId, headers) {
  console.log('params', collectionId, headers)
  return request(`/api/collections/${collectionId}`, {
    method: 'GET',
    headers
  })
}
