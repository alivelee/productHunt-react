import * as actionTypes from '../types'
const initialState = {
  postListData: [],
  postDetail: null
}

const getPostRequest = (state, action) => {
  return {
    ...state,
    postListData: action.payload.posts
  }
}

const getPostDetailequest = (state, action) => {
  return {
    ...state,
    postDetail: action.payload.post
  }
}
const posts = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_POSTS_SUCCESS): return getPostRequest(state, action)
    case (actionTypes.GET_POST_DETAIL_SUCCESS): return getPostDetailequest(state, action)
    default:
      return state
  }
}

export default posts
