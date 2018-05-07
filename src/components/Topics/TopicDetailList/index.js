import React from 'react'
import * as actionType from '../../../types'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import TopicDetailListItem from './detail'
import shortid from 'shortid'
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
  componentDidMount () {
    this.props.dispatch({
      type: actionType.GET_TOPIC_DETAIL_REQUEST,
      payload: {
        'search[topic]': this.props.match.params.topicId,
        'per_page': 20
      }
    })
  }
  render () {
    const { topicDetailData } = this.props.topics
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
          <Grid container alignContent='center' justify='center'>
            {topicDetailData.map(item =>
              <Grid item key={shortid.generate()}>
                <TopicDetailListItem {...item} dispatch={this.props.dispatch}/>
              </Grid>
            )}
          </Grid>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(TopicDetail)
