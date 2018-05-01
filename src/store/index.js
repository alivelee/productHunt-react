import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import mySaga from './sagas'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const middleWareForRouter = routerMiddleware(history)
const middleWareArray = [
  sagaMiddleware,
  middleWareForRouter,
  logger
]
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWareArray)
)

sagaMiddleware.run(mySaga)
