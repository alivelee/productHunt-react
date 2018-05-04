import React from 'react'
import * as actionTypes from '../../../types'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Loading from '../../Loading'
import RelativePostItem from './relativePostItem'
import shortid from 'shortid'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  wrapper: {
    marginTop: '20px'
  },
  title: {
    marginBottom: '20px'
  }
})

class PostItemDetail extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_POST_DETAIL_REQUEST,
      payload: {
        postId: this.props.match.params.postId
      }
    })
  }
  render () {
    const { classes, posts: { postDetail } } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        {!postDetail && <Loading />}
        {postDetail && <Grid container spacing={24} justify="center" className={classes.wrapper}>
          <Grid item xs={12} sm={7} md={7}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="title" className={classes.title}>
              Relative Posts
            </Typography>
            {postDetail.related_posts.map(item =>
              <RelativePostItem key={shortid.generate()} {...item}/>
            )}
          </Grid>
        </Grid>}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PostItemDetail)
