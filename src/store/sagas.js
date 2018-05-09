import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../types'
import { getTokenAction,
  getUserInfoAction,
  getPublicTokenAction,
  getCollectionsAction,
  getPostsAction,
  getTopicAction,
  getTopicDetailAction,
  getPostDetailAction,
  getCollectionDetailAction,
  getUserDetailAction,
  voteForPostAction,
  getMorePostsAction,
  getMoreTopicAction,
  getMoreTopicDetailAction
} from '../actions'

function * mySaga () {
  yield takeLatest(actionTypes.GET_TOKEN, getTokenAction)
  yield takeLatest(actionTypes.GET_USERINFO_REQUEST, getUserInfoAction)
  yield takeLatest(actionTypes.GET_PUBLIC_TOKEN, getPublicTokenAction)
  yield takeLatest(actionTypes.GET_COLLECTIONS_REQUEST, getCollectionsAction)
  yield takeLatest(actionTypes.GET_POSTS_REQUEST, getPostsAction)
  yield takeLatest(actionTypes.GET_TOPICS_REQUEST, getTopicAction)
  yield takeLatest(actionTypes.GET_TOPIC_DETAIL_REQUEST, getTopicDetailAction)
  yield takeLatest(actionTypes.GET_POST_DETAIL_REQUEST, getPostDetailAction)
  yield takeLatest(actionTypes.GET_COLLECTION_DETAIL_REQUEST, getCollectionDetailAction)
  yield takeLatest(actionTypes.GET_USERDETAIL_REQUEST, getUserDetailAction)
  yield takeLatest(actionTypes.VOTE_POST_REQUEST, voteForPostAction)
  yield takeLatest(actionTypes.GET_MORE_POST_REQUEST, getMorePostsAction)
  yield takeLatest(actionTypes.GET_MORE_TOPIC_REQUEST, getMoreTopicAction)
  yield takeLatest(actionTypes.GET_MORE_TOPIC_DETAIL_REQUEST, getMoreTopicDetailAction)

}

export default mySaga
