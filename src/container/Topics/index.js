import { connect } from 'react-redux'
import Topics from '../../components/Topics'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ topics, auth }) => ({ topics, auth })

const TopicsContainer = withRouter(connect(mapStateToProps)(Topics))

export default TopicsContainer
