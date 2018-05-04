import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getPosts, getPostDetail } from '../services/Posts'

export const getPostsRequest = (payload) => ({
  type: actionTypes.GET_POSTS_REQUEST,
  payload
})

export const getPostDetailRequest = (payload) => ({
  type: actionTypes.GET_POST_DETAIL_REQUEST,
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

export function * getPostDetailAction (action) {
  try {
    const postDetailResponse = yield call(getPostDetail, action.payload.postId)
    yield put({
      type: actionTypes.GET_POST_DETAIL_SUCCESS,
      payload: postDetailResponse
    })
  } catch (error) {
    console.log(error)
  }
}
