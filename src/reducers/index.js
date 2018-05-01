import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import user from './user'
import collections from './collections'
import topics from './topics'
import posts from './posts'
export default combineReducers({
  auth,
  user,
  collections,
  router: routerReducer,
  topics,
  posts
})
