import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getUserInfo, getUserDetail } from '../services/User'

export const getUserInfoRequest = (payload) => ({
  type: actionTypes.GET_USERINFO_REQUEST,
  payload
})

export const getUserDetailRequest = (payload) => ({
  type: actionTypes.GET_USERDETAIL_REQUEST,
  payload
})

export function * getUserInfoAction (action) {
  try {
    const userResponse = yield call(getUserInfo)
    yield put({
      type: actionTypes.GET_USERINFO_SUCCESS,
      payload: userResponse
    })
  } catch (error) {
    console.log(error)
  }
}

export function * getUserDetailAction (action) {
  try {
    yield put({
      type: actionTypes.CHANGE_LOADING_USER,
      payload: true
    })
    const userResponse = yield call(getUserDetail, action.payload)
    yield put({
      type: actionTypes.GET_USERDETAIL_SUCCESS,
      payload: userResponse
    })
    yield put({
      type: actionTypes.CHANGE_LOADING_USER,
      payload: false
    })
  } catch (error) {
    console.log(error)
  }
}
