import React from 'react'
import * as actionTypes from '../../../types'
import Loading from '../../Loading'
class CollectionDetail extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTION_DETAIL_REQUEST,
      payload: {
        collectionId: this.props.match.params.collectionId
      }
    })
  }
  render () {
    const { loading } = this.props.collections
    return (
      <React.Fragment>
        CollectionDetail
        {loading && <Loading />}
      </React.Fragment>
    )
  }
}

export default CollectionDetail
