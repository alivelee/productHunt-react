import * as actionTypes from '../types'
const initialState = {
  posts: []
}

const getPostRequest = (state, action) => {
  return {
    ...state,
    posts: action.payload
  }
}
const posts = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_POSTS_SUCCESS): return getPostRequest(state, action)
    default: 
      return state
  }
}

export default posts
