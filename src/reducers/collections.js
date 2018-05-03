import * as actionTypes from '../types'
const initialState = {
  collectionListData: []
}

const getColllectionRequest = (state, action) => {
  const { collections } = action.payload
  return {
    ...state,
    collectionListData: collections
  }
}
const getCollectionDetailRequest = (state, action) => {
  const { collections } = action.payload
  return {
    ...state,
    collectionDetail: collections
  }
}
const collections = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_COLLECTIONS_SUCCESS): return getColllectionRequest(state, action)
    case (actionTypes.GET_COLLECTION_DETAIL_SUCCESS): return getCollectionDetailRequest(state, action)
    default:
      return state
  }
}

export default collections
