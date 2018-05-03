import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getPosts } from '../services/Posts'

export const getPostsRequest = (payload) => ({
  type: actionTypes.GET_POSTS_REQUEST,
  payload
})

export function * getPostsAction (action) {
  try {
    const postsResponse = yield call(getPosts, action.payload)
    yield put({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: postsResponse
    })
  } catch (error) {
    console.log(error)
  }
}
