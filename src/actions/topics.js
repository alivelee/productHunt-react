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

export const getTopicDetailRequest = (payload) => ({
  type: actionTypes.GET_TOPIC_DETAIL_REQUEST,
  payload
})

export function * getTopicAction (action) {
  try {
    const topicsResponse = yield call(getTopics, action.payload)
    yield put({
      type: actionTypes.GET_TOPICS_SUCCESS,
      payload: topicsResponse
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
