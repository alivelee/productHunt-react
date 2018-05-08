import { connect } from 'react-redux'
import UserDetail from '../../components/User/UserDetail'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ user, auth }) => ({ user, auth })

const UserDetailContainer = withRouter(connect(mapStateToProps)(UserDetail))

export default UserDetailContainer
