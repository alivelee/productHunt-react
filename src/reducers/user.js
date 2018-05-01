import { GET_USERINFO_SUCCESS, GET_USERDETAIL_SUCCESS } from '../types'
const initialState = {
  userInfo: null,
  userDetail: null
}

const getUserInfoRequest = (state, action) => {
  return {
    ...state,
    userInfo: action.payload.user
  }
}

const getUserDetailRequest = (state, action) => {
  return {
    ...state,
    userDetail: action.payload.user
  }
}
const user = (state = initialState, action) => {
  const handlers = {
    [GET_USERINFO_SUCCESS]: getUserInfoRequest,
    [GET_USERDETAIL_SUCCESS]: getUserDetailRequest
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export default user
