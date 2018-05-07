import React from 'react'
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { push } from 'react-router-redux'
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  votes: {
    textAlign: 'center'
  },
  postImage: {
    width: 70,
    height: 70,
    objectFit: 'cover'
  }
})

class PostList extends React.Component {
  linkToPostDetail = (id) => {
    this.props.dispatch(push(`/post/${id}`))
  }
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ListItem button onClick={ () => this.linkToPostDetail(this.props.id)}>
          <img src={this.props.screenshot_url['300px']} className={classes.postImage}/>
          <ListItemText primary={this.props.name} secondary={this.props.tagline}/>
          <div className={classes.votes}>
            <Typography variant="caption" gutterBottom align="center">
              {this.props.votes_count}
            </Typography>
            <Typography variant="body1" gutterBottom align="right">
              Votes
            </Typography>
          </div>
        </ListItem>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PostList)
