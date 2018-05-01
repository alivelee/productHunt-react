import { GET_TOKEN_SUCCESS, LOGOUT, GET_PUBLIC_TOKEN_SUCCESS } from '../types'
import { setCookie, getCookie } from '../utils/cookie'
const initialState = {
  isPublicLogin: !!getCookie('publicAccessToken'),
  isPrivatgeLogin: !!getCookie('accessToken'),
  publicAuthHeader: {
    Authorization: `${getCookie('tokenType')} ${getCookie('publicAccessToken')}`
  },
  privateAuthHeader: {
    Authorization: `${getCookie('tokenType')} ${getCookie('publicAccessToken')}`
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_SUCCESS:
      setCookie('accessToken', action.payload.access_token)
      setCookie('tokenType', action.payload.token_type)
      return {
        ...state,
        isLogin: true,
        authHeader: {
          Authorization: `${action.payload.token_type} ${action.payload.access_token}`
        }
      }
    case GET_PUBLIC_TOKEN_SUCCESS:
      setCookie('publicAccessToken', action.payload.access_token)
      setCookie('tokenType', action.payload.token_type)
      return {
        ...state,
        publicAuthHeader: {
          Authorization: `${action.payload.token_type} ${action.payload.access_token}`
        }
      }
    case LOGOUT:
      setCookie('accessToken', undefined)
      return {
        ...state,
        isLogin: false
      }
    default:
      return state
  }
}

export default auth
