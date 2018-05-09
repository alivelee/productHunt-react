import React from 'react'
import * as actiontype from '../../../types'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import * as actionTypes from '../../../types'
import Loading from '../../Loading'
import shortid from 'shortid'
import { push } from 'react-router-redux'
const styles = theme => ({
  card: {
    width: '80vw',
    margin: '20px auto'
  },
  media: {
    height: 0,
    paddingTop: '12.25%', 
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    display: 'inline-block',
    cursor: 'pointer'
  },
});

class UserDetail extends React.Component {
  state = {
    expanded: false
  }
  componentDidMount () {
    const userId = this.props.match.params.userId
    this.props.dispatch({
      type: actiontype.GET_USERDETAIL_REQUEST,
      payload: userId
    })
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'search[subscriber_id]': userId
      }
    })
  }
  linkToUserDetail = (id) => {
    this.props.dispatch(push(`/user/${id}`))
  }
  componentDidUpdate (nextProps) {
    console.log('updated')
    let oldUserId = this.props.match.params.userId
    let newUserId = nextProps.match.params.userId
    console.log(oldUserId, newUserId)
    if (newUserId !== oldUserId) {
      nextProps.dispatch({
        type: actionTypes.GET_USERDETAIL_REQUEST,
        payload: newUserId
      })
    }
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render () {
    const { classes, user : { userDetail, loading } } = this.props;
    return (
      <React.Fragment>
        {loading && <Loading />}
        {!loading && <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} src={userDetail.image_url['40px']}/>
            }
            title={userDetail.name}
            subheader={userDetail.headline}
          />
          <CardMedia
            className={classes.media}
            image={userDetail.header_image_url}
          />
          <CardContent>
            <Typography component="p">
              Follower: {userDetail.followers_count}
            </Typography>
            <Typography component="p">
              Followeings: {userDetail.followings_count}
            </Typography>
            <Typography component="p">
              Votes: {userDetail.votes_count}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2" gutterBottom>
                Followers: 
              </Typography>
              {userDetail.followers.map(item => <Avatar className={classes.avatar} src={item.image_url['40px']} key={shortid.generate()} onClick={ () => this.linkToUserDetail(item.id)}/>)}
              <Typography paragraph variant="body2" gutterBottom>
                Followeings: 
              </Typography>
              {userDetail.followings.map(item => <Avatar className={classes.avatar} src={item.image_url['40px']} key={shortid.generate()} onClick={ () => this.linkToUserDetail(item.id)}/>)}
            </CardContent>
          </Collapse>
        </Card>}
        
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(UserDetail)
