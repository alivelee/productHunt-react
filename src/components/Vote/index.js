import React from 'react'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import red from 'material-ui/colors/red'
import { withStyles } from 'material-ui/styles'
import * as actionTypes from '../../types'

const styles = theme => ({
  icon: {

  },
  iconVoted: {
    color: red[500]
  },
  h3: {
    display: 'inline-block'
  }
})

class Vote extends React.Component {
  state = {
    votes_count: this.props.vote,
    isVote: false
  }
  voteRequest = (id) => {
    this.props.dispatch({
      type: actionTypes.VOTE_POST_REQUEST,
      payload: this.props.id
    })
  }
  voteForPost = (id) => {
    this.voteRequest(id)
    this.setState((previousState) => {
      if (!this.state.isVote) {
        return {
          votes_count: previousState.votes_count + 1,
          isVote: true
        }
      }
      if (this.state.isVote) {
        return {
          votes_count: previousState.votes_count - 1,
          isVote: false
        }
      }
    })
  }
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <IconButton aria-label="favourite" onClick={ () => this.voteForPost(this.props.id)} className={this.state.isVote?classes.iconVoted:classes.icon}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="subheading" color="textSecondary" className={classes.h3}>
          {this.state.votes_count}
        </Typography>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Vote)
