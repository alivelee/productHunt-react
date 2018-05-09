import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { push } from 'react-router-redux' 

import * as actionTypes from '../../../types'
const styles = {
  card: {
    width: 350,
    height: 350,
    margin: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  header: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'

  }
}

class TopicDetailListItem extends React.Component {
  linkToDetail = (id) => {
    this.props.dispatch(push(`/post/${id}`))
  }
  render () {
    const { classes, name, screenshot_url, id, tagline } = this.props
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={screenshot_url['850px']}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={classes.header}>
              {name}
            </Typography>
            <Typography component="p" >
              {tagline}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => this.linkToDetail(id)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

TopicDetailListItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopicDetailListItem)
