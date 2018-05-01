import React from 'react'
import * as actionTypes from '../../types'
class Topics extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'per_page': 20
      },
      header: this.props.auth.privateAuthHeader
    })
  }
  render () {
    return (
      <React.Fragment>
        Topics
      </React.Fragment>
    )
  }
}

export default Topics
