import { connect } from 'react-redux'
import App from '../../components/App'
import WrapperComponent from '../WrapperComponent'
const mapStateToProps = ({ auth, user }) => ({ auth, user })

const AppContainer = WrapperComponent(connect(mapStateToProps)(App))

export default AppContainer
