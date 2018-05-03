import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getFeaturedCollection, getCollectionDetail } from '../services/Collections'

export const getCollectionsRequest = (payload) => ({
  type: actionTypes.GET_COLLECTIONS_REQUEST,
  payload
})

export const getCollectionsDetailRequest = (payload) => ({
  type: actionTypes.GET_COLLECTION_DETAIL_REQUEST,
  payload
})

export function * getCollectionsAction (action) {
  try {
    const collectionsResponse = yield call(getFeaturedCollection, action.payload)
    yield put({
      type: actionTypes.GET_COLLECTIONS_SUCCESS,
      payload: collectionsResponse
    })
  } catch (error) {
    console.log(error)
  }
}

export function * getCollectionDetailAction (action) {
  try {
    const collectionsResponse = yield call(getCollectionDetail, action.payload.collectionId)
    yield put({
      type: actionTypes.GET_COLLECTIONS_SUCCESS,
      payload: collectionsResponse
    })
  } catch (error) {
    console.log(error)
  }
}
