import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getPosts, getPostDetail, voteForPost } from '../services/Posts'

export const getPostsRequest = (payload) => ({
  type: actionTypes.GET_POSTS_REQUEST,
  payload
})

export const getMorePostsRequest = (payload) => ({
  type: actionTypes.GET_MORE_POST_REQUEST,
  payload
})

export const getPostDetailRequest = (payload) => ({
  type: actionTypes.GET_POST_DETAIL_REQUEST,
  payload
})

export const voteForPostRequest = (payload) => ({
  type: actionTypes.VOTE_POST_REQUEST
})

export function * getPostsAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_POST,
      payload: true
    })
    const postsResponse = yield call(getPosts, action.payload)
    yield put({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: postsResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_POST,
      payload: false
    })
  } catch (error) {
    console.log(error)
  }
}

export function * getMorePostsAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_POST,
      payload: true
    })
    const postsResponse = yield call(getPosts, action.payload)
    yield put({
      type: actionTypes.GET_MORE_POST_SUCCESS,
      payload: postsResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_POST,
      payload: false
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

export function * voteForPostAction (action) {
  try {
    const voteReponse = yield call(voteForPost, action.payload)
  } catch (error) {
    console.log(error)
  }
}
