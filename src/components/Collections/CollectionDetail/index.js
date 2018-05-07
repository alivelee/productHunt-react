import React from 'react'
import * as actionTypes from '../../../types'
import Loading from '../../Loading'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import List from 'material-ui/List'
import dayjs from 'dayjs'
import PostList from './postList'
import shortid from 'shortid'
const styles = theme => ({
  card: {
    marginTop: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {

  }
})

class CollectionDetail extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTION_DETAIL_REQUEST,
      payload: {
        collectionId: this.props.match.params.collectionId
      }
    })
  }
  render () {
    const { loading, collectionDetail } = this.props.collections
    const { classes } = this.props
    return (
      <React.Fragment>
        {loading && <Loading />}
        {collectionDetail &&
        <Grid container justify="center" >
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    className={classes.avatar}
                    src={collectionDetail.user.image_url['40px']}
                  />

                }
                title={collectionDetail.name}
                subheader={`${dayjs(new Date(collectionDetail.created_at)).year()}-${dayjs(new Date(collectionDetail.created_at).getMonth() + 1)}-${dayjs(new Date(collectionDetail.created_at)).date()}`}
              />
              <CardMedia
                className={classes.media}
                image={collectionDetail.background_image_url}
              />
              <CardContent>
                <Typography component="p">
                  {collectionDetail.title}
                </Typography>
              </CardContent>
              <List>
                {collectionDetail.posts.map(item =>
                  <PostList
                    key={shortid.generate()}
                    {...item}
                    dispatch={this.props.dispatch}
                  />)}
              </List>
            </Card>
          </Grid>
        </Grid>}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CollectionDetail)
