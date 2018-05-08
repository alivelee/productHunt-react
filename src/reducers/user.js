import { GET_USERINFO_SUCCESS, GET_USERDETAIL_SUCCESS, CHANGE_LOADING_USER } from '../types'
const initialState = {
  userInfo: null,
  userDetail: null,
  loading: true
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

const changeLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload
  }
}
const user = (state = initialState, action) => {
  const handlers = {
    [GET_USERINFO_SUCCESS]: getUserInfoRequest,
    [GET_USERDETAIL_SUCCESS]: getUserDetailRequest,
    [CHANGE_LOADING_USER]: changeLoading
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export default user
