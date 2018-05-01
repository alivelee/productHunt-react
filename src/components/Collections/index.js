import React from 'react'
import * as actionTypes from '../../types'
class Collections extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'search[featured]': true,
        'per_page': 20
      },
      header: this.props.auth.privateAuthHeader
    })
  }
  render () {
    return (
      <React.Fragment>
        Collections
      </React.Fragment>
    )
  }
}

export default Collections
