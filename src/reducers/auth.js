import { GET_TOKEN_SUCCESS, LOGOUT, GET_PUBLIC_TOKEN_SUCCESS } from '../types'
import { setCookie, getCookie } from '../utils/cookie'
const initialState = {
  isPublicLogin: !!getCookie('publicAccessToken'),
  isPrivatgeLogin: !!getCookie('accessToken')
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
        ...state
      }
    case LOGOUT:
      setCookie('accessToken', undefined)
      return {
        ...state
      }
    default:
      return state
  }
}

export default auth
