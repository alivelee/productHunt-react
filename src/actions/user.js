import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { getUserInfo } from '../services/User'

export const getUserInfoRequest = (payload) => ({
  type: actionTypes.GET_USERINFO_REQUEST,
  payload
})

export function * getUserInfoAction (action) {
  try {
    const userResponse = yield call(getUserInfo, action.payload.header)
    yield put({
      type: actionTypes.GET_USERINFO_SUCCESS,
      payload: userResponse
    })
  } catch (error) {
    console.log(error)
  }
}
