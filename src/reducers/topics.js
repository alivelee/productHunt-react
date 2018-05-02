import * as actionType from '../types'
const initialState = {
  topicsData: [],
  topicDetailData: []
}

const getTopicRequest = (state, action) => {
  return {
    ...state,
    topicsData: action.payload.topics
  }
}

const getTopicDetailRequest = (state, action) => {
  return {
    ...state,
    topicDetailData: action.payload.posts
  }
}

const clearTopicDetailCache = (state, action) => {
  return {
    ...state,
    topicDetailData: []
  }
}
const topics = (state = initialState, action) => {
  switch (action.type) {
    case (actionType.GET_TOPICS_SUCCESS): return getTopicRequest(state, action)
    case (actionType.GET_TOPIC_DETAIL_SUCCESS): return getTopicDetailRequest(state, action)
    case (actionType.CLEAR_TOPIC_DETAIL_CACHE): return clearTopicDetailCache(state, action)
    default:
      return state
  }
}

export default topics
