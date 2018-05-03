import * as actionTypes from '../types'
const initialState = {
  postListData: []
}

const getPostRequest = (state, action) => {
  return {
    ...state,
    postListData: action.payload.posts
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
