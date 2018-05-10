import React from 'react'
import {
  Redirect
} from 'react-router-dom'

class RedirectFromIndex extends React.Component {
  render () {
    const { isPrivatgeLogin } = this.props.auth
    if (isPrivatgeLogin) {
      return <Redirect to='/feed'/>
    } else {
      return <Redirect to='/post'/>
    }
  }
}

export default RedirectFromIndex
