import React from 'react'
import * as actionTypes from '../../types'
class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: actionTypes.GET_POSTS_REQUEST,
      payload: {
        'per_page': 20
      },
      header: this.props.auth.privateAuthHeader
    })
  }
  render () {
    return (
      <React.Fragment>
        Posts
      </React.Fragment>
    )
  }
}

export default Posts
