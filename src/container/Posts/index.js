import { connect } from 'react-redux'
import Posts from '../../components/Posts'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ posts, auth }) => ({ posts, auth })

const PostsContainer = withRouter(connect(mapStateToProps)(Posts))

export default PostsContainer
