import { connect } from 'react-redux'
import Collections from '../../components/Collections/CollectionDetail'

const mapStateToProps = ({ collections }) => ({ collections })

const CollectionsDetailContainer = connect(mapStateToProps)(Collections)

export default CollectionsDetailContainer
