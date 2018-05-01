import React from 'react'
import AuthRedirectComponent from '../../container/Auth'
import Posts from '../Posts'
import Collections from '../Collections'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Menu from './Menu'

const LoginComponent = (props) => (
  <Router>
    <React.Fragment>
      <Menu isLogin={props.auth.isPrivateLogin} dispatch={props.dispatch} auth={props.auth}/>
    </React.Fragment>
  </Router>
)

export default LoginComponent
