import * as actionType from '../types'
const initialState = {
  topics: []
}

const getTopicRequest = (state, action) => {
  return {
    ...state,
    topics: action.payload
  }
}

const topics = (state = initialState, action) => {
  switch (action.type) {
    case (actionType.GET_TOPICS_SUCCESS): return getTopicRequest(state, action)
    default:
      return state
  }
}

export default topics
