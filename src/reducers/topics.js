import * as actionType from '../types'
const initialState = {
  topicsData: [],
  topicDetailData: [],
  loading: false,
  moreLoading: false,
  topicDetailLoading: false
}

const getTopicRequest = (state, action) => {
  return {
    ...state,
    topicsData: action.payload.topics
  }
}

const getMoreTopicRequest = (state, action) => {
  return {
    ...state,
    topicsData: state.topicsData.concat(action.payload.topics)
  }
}
const getTopicDetailRequest = (state, action) => {
  return {
    ...state,
    topicDetailData: action.payload.posts
  }
}

const getMoreTopicDetailRequest = (state, action) => {
  return {
    ...state,
    topicDetailData: state.topicDetailData.concat(action.payload.posts)
  }
}
const clearTopicDetailCache = (state, action) => {
  return {
    ...state,
    topicDetailData: []
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

const changeLoadingDetail = (state, action) => {
  return {
    ...state,
    topicDetailLoading: action.payload
  }
}
const topics = (state = initialState, action) => {
  switch (action.type) {
    case (actionType.GET_TOPICS_SUCCESS): return getTopicRequest(state, action)
    case (actionType.GET_TOPIC_DETAIL_SUCCESS): return getTopicDetailRequest(state, action)
    case (actionType.CLEAR_TOPIC_DETAIL_CACHE): return clearTopicDetailCache(state, action)
    case (actionType.CHANGE_LOADING_TOPIC): return changeLoading(state, action)
    case (actionType.CHANGE_LOADING_MORE_TOPIC): return changeLoadingMore(state, action)
    case (actionType.GET_MORE_TOPIC_SUCCESS): return getMoreTopicRequest(state, action)
    case (actionType.GET_MORE_TOPIC_DETAIL_SUCCESS): return getMoreTopicDetailRequest(state, action)
    case (actionType.CHANGE_LOADING_MORE_TOPICDETAIL): return changeLoadingDetail(state, action)
    default:
      return state
  }
}

export default topics
