import * as actionTypes from '../types'
const initialState = {
  postListData: [],
  postDetail: null,
  loading: false,
  moreLoading: false
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
const clearPostCache = (state, action) => {
  return {
    ...state,
    postDetail: null
  }
}

const changeLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload
  }
}

const changeLoadingMore = (state, action) => {
  return {
    ...state,
    moreLoading: action.payload
  }
}
const appendPost = (state, action) => {
  return {
    ...state,
    postListData: state.postListData.concat(action.payload.posts)
  }
}
const posts = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_POSTS_SUCCESS): return getPostRequest(state, action)
    case (actionTypes.GET_POST_DETAIL_SUCCESS): return getPostDetailequest(state, action)
    case (actionTypes.CLEAR_POST_CACHE): return clearPostCache(state, action)
    case (actionTypes.CHANGE_LOADING_POST): return changeLoading(state, action)
    case (actionTypes.CHANGE_LOADING_MORE_POST): return changeLoadingMore(state, action)
    case (actionTypes.GET_MORE_POST_SUCCESS): return appendPost(state, action)
    default:
      return state
  }
}

export default posts
