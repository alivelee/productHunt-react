import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../types'
import { getTokenAction,
  getUserInfoAction,
  getPublicTokenAction,
  getCollectionsAction,
  getPostsAction,
  getTopicAction
} from '../actions'

function * mySaga () {
  yield takeLatest(actionTypes.GET_TOKEN, getTokenAction)
  yield takeLatest(actionTypes.GET_USERINFO_REQUEST, getUserInfoAction)
  yield takeLatest(actionTypes.GET_PUBLIC_TOKEN, getPublicTokenAction)
  yield takeLatest(actionTypes.GET_COLLECTIONS_REQUEST, getCollectionsAction)
  yield takeLatest(actionTypes.GET_POSTS_REQUEST, getPostsAction)
  yield takeLatest(actionTypes.GET_TOPICS_REQUEST, getTopicAction)
}

export default mySaga
