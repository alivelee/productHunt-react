import React from 'react'
import * as actionTypes from '../../types'
import { CircularProgress } from 'material-ui/Progress'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import shortid from 'shortid'
import PostListItem from './PostsItem'

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
  gridContainer: {
    margin: '20px auto',
    width: '80vw'
  }
})

class Posts extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_POSTS_REQUEST,
      payload: {
        'per_page': 40
      }
    })
  }

  render () {
    const { postListData } = this.props.posts
    return (
      <React.Fragment>
        {postListData.length === 0 &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} className={this.props.classes.loadingItem}>
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {postListData.length !== 0 &&
          <Grid container justify='flex-start' className={this.props.classes.gridContainer}>
            <Grid item xs={12} sm={9} md={9}>
              <Grid container>
                {postListData.map(item =>
                  <Grid item key={shortid.generate()}>
                    <PostListItem {...item} dispatch={this.props.dispatch}/>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <List component="nav">
                <ListItem button onClick={this.showAllTopicRequest}>
                  <ListItemText primary="Show All Posts" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Get the Trending Posts" onClick={this.showTrendingTopicRequest}/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Posts)
