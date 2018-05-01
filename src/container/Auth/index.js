import { connect } from 'react-redux'
import Auth from '../../components/Login/Auth'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ auth }) => ({ auth })

const AuthContainer = withRouter(connect(mapStateToProps)(Auth))

export default AuthContainer
