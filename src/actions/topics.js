import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import {
  getTopics,
  getTopicDetail
} from '../services/Topics'

export const getTopicRequest = (payload) => ({
  type: actionTypes.GET_TOPICS_REQUEST,
  payload
})

export const getMoreTopicRequest = (payload) => ({
  type: actionTypes.GET_TOPICS_REQUEST,
  payload
})

export const getTopicDetailRequest = (payload) => ({
  type: actionTypes.GET_TOPIC_DETAIL_REQUEST,
  payload
})
export const getMoreTopicDetailRequest = (payload) => ({
  type: actionTypes.GET_MORE_TOPIC_DETAIL_REQUEST,
  payload
})
export function * getTopicAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_TOPIC,
      payload: true
    })
    const topicsResponse = yield call(getTopics, action.payload)
    yield put({
      type: actionTypes.GET_TOPICS_SUCCESS,
      payload: topicsResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_TOPIC,
      payload: false
    })
  } catch (e) {
    console.log(e)
  }
}

export function * getMoreTopicAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_TOPIC,
      payload: true
    })
    const topicsResponse = yield call(getTopics, action.payload)
    yield put({
      type: actionTypes.GET_MORE_TOPIC_SUCCESS,
      payload: topicsResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_TOPIC,
      payload: false
    })
  } catch (e) {
    console.log(e)
  }
}

export function * getTopicDetailAction (action) {
  try {
    const topicDetailResponse = yield call(getTopicDetail, action.payload)
    yield put({
      type: actionTypes.GET_TOPIC_DETAIL_SUCCESS,
      payload: topicDetailResponse
    })
  } catch (e) {
    console.log(e)
  }
}

export function * getMoreTopicDetailAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_TOPICDETAIL,
      payload: true
    })
    const topicDetailResponse = yield call(getTopicDetail, action.payload)
    yield put({
      type: actionTypes.GET_MORE_TOPIC_DETAIL_SUCCESS,
      payload: topicDetailResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_MORE_TOPICDETAIL,
      payload: false
    })
  } catch (e) {
    console.log(e)
  }
}