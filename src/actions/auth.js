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
    yield put({
      type: actionTypes.GET_TOKEN_SUCCESS,
      payload: tokenResponse
    })
    const userResponse = yield call(getUserInfo, {
      Authorization: `${tokenResponse.token_type} ${tokenResponse.access_token}`
    })
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
    const tokenResponse = yield call(getToken, action.payload)
    yield put({
      type: actionTypes.GET_PUBLIC_TOKEN_SUCCESS,
      payload: tokenResponse
    })
  } catch (e) {
    console.log(e)
  }
}
