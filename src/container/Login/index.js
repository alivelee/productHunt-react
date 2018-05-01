import { connect } from 'react-redux'
import Auth from '../../components/Login'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ auth }) => ({ auth })

const LoginContainer = withRouter(connect(mapStateToProps)(Auth))

export default LoginContainer
