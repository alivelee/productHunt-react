import { connect } from 'react-redux'
import PostsDetail from '../../components/Posts/PostItemDetail'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ posts }) => ({ posts })

const PostsContainer = withRouter(connect(mapStateToProps)(PostsDetail))

export default PostsContainer
