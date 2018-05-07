import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getToken } from '../services/Auth'
import { getUserInfo } from '../services/User'
export const getTokenRequest = (payload) => ({
  type: actionTypes.GET_TOKEN,
  payload
})

export const getPublicTokenRequest = (payload) => ({
  type: actionTypes.GET_PUBLIC_TOKEN,
  payload
})

export function * getTokenAction (action) {
  try {
    const tokenResponse = yield call(getToken, action.payload)
    console.log(tokenResponse)
    yield put({
      type: actionTypes.GET_TOKEN_SUCCESS,
      payload: tokenResponse
    })
    const userResponse = yield call(getUserInfo)
    yield put({
      type: actionTypes.GET_USERINFO_SUCCESS,
      payload: userResponse
    })
  } catch (e) {
    console.log(e)
  }
}

export function * getPublicTokenAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING,
      payload: true
    })
    const tokenResponse = yield call(getToken, action.payload)
    yield put({
      type: actionTypes.GET_PUBLIC_TOKEN_SUCCESS,
      payload: tokenResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING,
      payload: false
    })
  } catch (e) {
    console.log(e)
  }
}
