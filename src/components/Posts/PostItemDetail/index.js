import React from 'react'
import * as actionTypes from '../../../types'
import { replace } from 'react-router-redux'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import Loading from '../../Loading'
import Button from 'material-ui/Button'
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
    marginBottom: '20px',
    marginTop: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'// 16:9
  },
  chip: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 1.2
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)'
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
  componentWillUnmount () {
    this.props.dispatch({
      type: actionTypes.CLEAR_POST_CACHE
    })
  }
  componentDidUpdate (nextProps) {
    console.log('updated')
    let oldPostId = this.props.match.params.postId
    let newPostId = nextProps.match.params.postId
    console.log(oldPostId, newPostId)
    if (newPostId !== oldPostId) {
      nextProps.dispatch({
        type: actionTypes.GET_POST_DETAIL_REQUEST,
        payload: {
          postId: this.props.match.params.postId
        }
      })
      this.props.dispatch({
        type: actionTypes.CLEAR_POST_CACHE
      })
    }
  }
  render () {
    const { classes, posts: { postDetail } } = this.props
    // console.log(postDetail.screenshot_url['800px'])
    return (
      <React.Fragment>
        {!postDetail && <Loading />}
        {postDetail && <Grid container justify="center" className={classes.wrapper} spacing={40}>
          <Grid item xs={12} sm={12} md={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={postDetail.screenshot_url['850px']}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {postDetail.name}
                </Typography>
                {postDetail.topics.map(item => <Chip label={item.name} className={classes.chip} key={shortid.generate()}/>)}
                <Typography component="p" gutterBottom>
                  {postDetail.description}
                </Typography>
                <Button variant="raised" className={classes.button} size="small" >
                  <Typography component="p" >
                    <a href={postDetail.redirect_url} className={classes.link}>link to site</a>
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="title" className={classes.title}>
              Relative Posts
            </Typography>
            {postDetail.related_posts.map(item =>
              <RelativePostItem key={shortid.generate()} {...item} dispatch={this.props.dispatch}/>
            )}
          </Grid>
        </Grid>}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PostItemDetail)
