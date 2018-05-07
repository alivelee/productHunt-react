import React from 'react'
import { Redirect } from 'react-router-dom'
import * as actionTypes from '../../types'
import { PRODUCT_HUNT_API_KEY, PRODUCT_HUNT_API_SECRET } from '../../constants/clientId'

class AuthRedirectComponent extends React.Component {
  componentDidMount () {
    const params = new URLSearchParams(this.props.location.search)
    const code = params.get('code')
    this.props.dispatch({
      type: actionTypes.GET_TOKEN,
      payload: {
        client_id: PRODUCT_HUNT_API_KEY,
        client_secret: PRODUCT_HUNT_API_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:3000/callback'
      }
    })
  }
  render () {
    return (
      <React.Fragment>
        <Redirect to="/"/>
      </React.Fragment>
    )
  }
}

export default AuthRedirectComponent
