import { connect } from 'react-redux'
import Collections from '../../components/Collections'

const mapStateToProps = ({ collections, auth }) => ({ collections, auth })

const CollectionsContainer = connect(mapStateToProps)(Collections)

export default CollectionsContainer
