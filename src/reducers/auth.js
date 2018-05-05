import { GET_TOKEN_SUCCESS, LOGOUT, GET_PUBLIC_TOKEN_SUCCESS, CHANGE_LOADING } from '../types'
import { setCookie, getCookie } from '../utils/cookie'
const initialState = {
  isPublicLogin: !!getCookie('accessToken'),
  isPrivatgeLogin: !!getCookie('accessToken'),
  accessToken: getCookie('accessToken')
}

const changeLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload
  }
}
const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_SUCCESS:
      setCookie('accessToken', action.payload.access_token)
      setCookie('tokenType', action.payload.token_type)
      return {
        ...state
      }
    case GET_PUBLIC_TOKEN_SUCCESS:
      setCookie('accessToken', action.payload.access_token)
      setCookie('tokenType', action.payload.token_type)
      return {
        ...state,
        isPublicLogin: true,
        accessToken: action.payload
      }
    case LOGOUT:
      setCookie('accessToken', undefined)
      return {
        ...state
      }
    case (CHANGE_LOADING): return changeLoading(state, action)
    default:
      return state
  }
}

export default auth
