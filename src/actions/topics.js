import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getTopics } from '../services/Topics'

export const getTopicRequest = (payload) => ({
  type: actionTypes.GET_TOPICS_REQUEST,
  payload
})

export function * getTopicAction (action) {
  try {
    const topicsResponse = yield call(getTopics, action.payload, action.header)
    yield put({
      type: actionTypes.GET_TOPICS_SUCCESS,
      payload: topicsResponse
    })
  } catch (e) {
    console.log(e)
  }
}
