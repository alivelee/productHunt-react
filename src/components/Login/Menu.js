import React from 'react'
import { withRouter } from 'react-router-dom'
import { LOGOUT } from '../../types'
import { PRODUCT_HUNT_API_KEY } from '../../constants/clientId'

const authUrl = `https://api.producthunt.com/v1/oauth/authorize?client_id=${PRODUCT_HUNT_API_KEY}&redirect_uri=https://localhost:3000/callback&response_type=code&scope=public+private`

class Menu extends React.Component {
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    const { isLogin, dispatch } = this.props
    // console.log(isLogin)
    return (
      isLogin ? (
        <p>
          Welcome!
          <button
            onClick={() => {
              dispatch({
                type: LOGOUT
              })
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <React.Fragment>
          <a href={authUrl}>Login</a>
        </React.Fragment>
      )
    )
  }
}

export default withRouter(Menu)
