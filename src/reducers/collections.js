import * as actionTypes from '../types'
const initialState = {
  collectionListData: [],
  collectionDetail: null,
  loading: true
}

const getColllectionRequest = (state, action) => {
  const { collections } = action.payload
  return {
    ...state,
    collectionListData: collections
  }
}
const getCollectionDetailRequest = (state, action) => {
  const { collection } = action.payload
  console.log(collection)
  return {
    ...state,
    collectionDetail: collection
  }
}
const changeLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload
  }
}
const collections = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_COLLECTIONS_SUCCESS): return getColllectionRequest(state, action)
    case (actionTypes.GET_COLLECTION_DETAIL_SUCCESS): return getCollectionDetailRequest(state, action)
    case (actionTypes.CHANGE_LOADING_COLLECTION): return changeLoading(state, action)
    default:
      return state
  }
}

export default collections
