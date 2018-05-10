import { connect } from 'react-redux'
import RedirectComponent from '../../components/RedirectComponent'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ auth }) => ({ auth })

const RedirectContainer = withRouter(connect(mapStateToProps)(RedirectComponent))

export default RedirectContainer
