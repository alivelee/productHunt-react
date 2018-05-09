import React from 'react'
import * as actionType from '../../../types'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import TopicDetailListItem from './detail'
import shortid from 'shortid'
import LoadMore from '../../LoadMore'
const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  loadingItem: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class TopicDetail extends React.Component {
  state = {
    initialPage: 2
  }
  componentDidMount () {
    this.props.dispatch({
      type: actionType.GET_TOPIC_DETAIL_REQUEST,
      payload: {
        'search[topic]': this.props.match.params.topicId,
        'per_page': 20
      }
    })
  }
  componentWillUnmount () {
    console.log('fired')
    this.props.dispatch({
      type: actionType.CLEAR_TOPIC_DETAIL_CACHE
    })
  }
  getMore = () => {
    this.setState({
      initialPage: this.state.initialPage + 1
    })
    this.props.dispatch({
      type: actionType.GET_MORE_TOPIC_DETAIL_REQUEST,
      payload: {
        'search[topic]': this.props.match.params.topicId,
        'per_page': 20,
        page: this.state.initialPage
      }
    })
  }
  render () {
    const { topicDetailData, topicDetailLoading } = this.props.topics
    return (
      <React.Fragment>
        {topicDetailData.length === 0 &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} className={this.props.classes.loadingItem}>
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {topicDetailData.length !== 0 &&
        <React.Fragment>
          <Grid container alignContent='center' justify='center'>
            {topicDetailData.map(item =>
              <Grid item key={shortid.generate()}>
                <TopicDetailListItem {...item} dispatch={this.props.dispatch}/>
              </Grid>
            )}
          </Grid>
          <LoadMore action={this.getMore} loading={topicDetailLoading}/>
        </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(TopicDetail)
