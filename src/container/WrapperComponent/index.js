import React from 'react'
import { connect } from 'react-redux'
import { GET_PUBLIC_TOKEN } from '../../types'
import { PRODUCT_HUNT_API_KEY, PRODUCT_HUNT_API_SECRET } from '../../constants/clientId'
import Loading from '../../components/Loading'
const mapStateToProps = ({ auth }) => ({ auth })

const WrapperComponent = (WrappedComponent) => {
  class InnerComponent extends React.Component {
    componentDidMount () {
      !this.props.auth.isPublicLogin && this.props.dispatch({
        type: GET_PUBLIC_TOKEN,
        payload: {
          client_id: PRODUCT_HUNT_API_KEY,
          client_secret: PRODUCT_HUNT_API_SECRET,
          grant_type: 'client_credentials'
        }
      })
      console.log('fetched First')
    }
    render () {
      console.log(this.props)
      const { auth: { accessToken } } = this.props
      return (
        accessToken ? <WrappedComponent {...this.props} /> : <Loading />
      )
    }
  }

  return connect(mapStateToProps)(InnerComponent)
}

export default WrapperComponent
