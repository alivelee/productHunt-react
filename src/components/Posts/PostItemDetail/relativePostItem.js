import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import * as actionTypes from '../../../types'
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import { push } from 'react-router-redux' 
import Vote from '../../Vote'
const styles = theme => ({
  card: {
    display: 'flex',
    marginBottom: '20px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '2 0 200px'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 170,
    height: 'auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '17px',
    paddingBottom: theme.spacing.unit,
  }
})

class RelativePostItem extends React.Component {
  linkToDetail = (id) => {
    console.log(id)
    this.props.dispatch(push(`/post/${id}`))
  }
  render () {
    const { classes, name, user, tagline, theme, id, screenshot_url } = this.props
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">{name}</Typography>
              <Typography variant="subheading" color="textSecondary">
                {user.name}
              </Typography>
              <Typography variant="body1">
                {tagline}
              </Typography>
            </CardContent>
            <div className={classes.controls}> 
              <Vote id={id} vote={this.props.votes_count} dispatch={this.props.dispatch}/>             
              <CardActions>
                <Button size="small" onClick={ () => this.linkToDetail(id)}>Learn More</Button>
              </CardActions>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={screenshot_url['300px']}
          />
        </Card>
      </div>
    )
  }
}

RelativePostItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(RelativePostItem)
