import { stringify } from 'qs'
import request from '../../utils/request'

export async function getFeaturedCollection (params) {
  console.log('params', params)
  return request(`/api/collections?${stringify(params)}`, {
    method: 'GET'
  })
}

export async function getCollections (params) {
  console.log('params', params)
  return request(`/api/collections?${stringify(params)}`, {
    method: 'GET'
  })
}

export async function getCollectionDetail (collectionId) {
  console.log('params', collectionId)
  return request(`/api/collections/${collectionId}`, {
    method: 'GET'
  })
}
