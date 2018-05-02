import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
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
  width: '100vw',
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
  }
})

class Topics extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_TOPICS_REQUEST,
      payload: {
        'per_page': 20,
        'search[trending]': true
      }
    })
  }
  render () {
    const { classes } = this.props
    const { topicsData } = this.props.topics
    return (
      <React.Fragment>
        {topicsData.length === 0 &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} className={this.props.classes.loadingItem} >
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {topicsData.length !== 0 &&
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

      </React.Fragment>
    )
  }
}

Topics.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Topics)
