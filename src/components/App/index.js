import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store'
import LoginComponent from '../../container/Login'
import AuthRedirectComponent from '../../container/Auth'
import Posts from '../../container/Posts'
import Collections from '../../container/Collections'
import Topics from '../../container/Topics'
import TopicDetail from '../../container/Topics/detail'
class App extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <ul>
            <li>
              <Link to='/collection'>Collections</Link>
            </li>
            <li>
              <Link to='/'>Posts</Link>
            </li>
            <li>
              <Link to='/topic'>Topics</Link>
            </li>
          </ul>
          <Route exact path='/callback' component={AuthRedirectComponent} />
          <Route exact path='/' component={Posts} />
          <Route exact path='/collection' component={Collections} />
          <Route exact path='/topic' component={Topics} />
          <Route exact path='/topic/:topicId' component={TopicDetail} />
          <Route exact path='/login' component={LoginComponent} />
        </Fragment>
      </ConnectedRouter>

    )
  }
}

export default App
