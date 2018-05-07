import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'
import shortid from 'shortid'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import * as actionTypes from '../../types'
import TopicListItem from './TopicListItem'
const paperStyle = {
  height: 'auto',
  textAlign: 'center',
  display: 'block'
}

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  loadingItem: {
    textAlign: 'center'
  },
  wrapper: {
    marginTop: 20
  }
})

class Topics extends React.Component {
  componentDidMount () {
   this.showTrendingTopicRequest()
  }
  showAllTopicRequest = () => {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'per_page': 20
      }
    })
  }
  showTrendingTopicRequest = () => {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'per_page': 20,
        'search[trending]': true
      }
    })
  }
  showRecentlyUpdateRequest = () => {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'sort_by': 'updated_at',
        'order': 'desc'
      }
    })
  }
  showRecentlyCreatedRequest = () => {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'sort_by': 'created_at',
        'order': 'asc'
      }
    })
  }
  render () {
    const { classes } = this.props
    const { topicsData, loading } = this.props.topics
    return (
      <React.Fragment>
        <Grid container justify='space-around' className={classes.wrapper}>
          <Grid item xs={12} sm={9} md={9} >
            {loading &&
              <Grid container alignContent='center'>
                <Grid item xs={12} className={this.props.classes.loadingItem} >
                  <CircularProgress className={this.props.classes.progress} size={50} />
                </Grid>
              </Grid>
            }
            {!loading &&
          <Grid container direction="column">
            <Paper style={paperStyle} elevation={1} >
              <Grid item className={this.props.classes.root}>
                <List>
                  {topicsData.map(item =>
                    <TopicListItem
                      key={shortid.generate()}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      dispatch={this.props.dispatch}
                    />
                  )
                  }
                </List>
              </Grid>
            </Paper>
          </Grid>}
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <List component="nav">
              <ListItem button onClick={this.showAllTopicRequest}>
                <ListItemText primary="Show All Topic" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Get the Trending Topic" onClick={this.showTrendingTopicRequest}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Recently Updated" onClick={this.showRecentlyUpdateRequest}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Recently Created" onClick={this.showRecentlyCreatedRequest}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>

      </React.Fragment>
    )
  }
}

Topics.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Topics)
