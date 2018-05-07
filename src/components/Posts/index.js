import React from 'react'
import * as actionTypes from '../../types'
import { CircularProgress } from 'material-ui/Progress'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import shortid from 'shortid'
import PostListItem from './PostsItem'
import dayjs from 'dayjs';
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
    this.getAllPost()
  }
  getAllPost = () => {
    this.props.dispatch({
      type: actionTypes.GET_POSTS_REQUEST,
      payload: {
        'per_page': 40
      }
    })
  }
  getMostUpVotedPost = () => {
    this.props.dispatch({
      type: actionTypes.GET_POSTS_REQUEST,
      payload: {
        'sort_by': 'votes_count',
        'order': 'desc',
        'search[featured_month]': dayjs().month() + 1,
        'search[featured_year]': dayjs().year()
      }
    })
  }
  getRecentlyCreatePost = () => {
    this.props.dispatch({
      type: actionTypes.GET_POSTS_REQUEST,
      payload: {
        'sort_by': 'created_at',
        'order': 'asc'
      }
    })
  }
  render () {
    const { postListData, loading } = this.props.posts
    return (
      <React.Fragment>
        {loading &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} sm={9} md={9} className={this.props.classes.loadingItem}>
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {!loading &&
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
                  <ListItemText primary="All Posts" onClick={this.getAllPost}/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Most Upvoted" onClick={this.getMostUpVotedPost}/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Recently Created" onClick={this.getRecentlyCreatePost}/>
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
