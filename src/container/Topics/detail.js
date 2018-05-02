import { connect } from 'react-redux'
import TopicDetail from '../../components/Topics/TopicDetailList'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ topics }) => ({ topics })

const TopicsContainer = withRouter(connect(mapStateToProps)(TopicDetail))

export default TopicsContainer
