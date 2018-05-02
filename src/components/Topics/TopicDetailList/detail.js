import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import * as actionTypes from '../../../types'
const styles = {
  card: {
    maxWidth: '350px',
    maxHeight: '400px',
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
  componentWillUnmount () {
    console.log('fired')
    this.props.dispatch({
      type: actionTypes.CLEAR_TOPIC_DETAIL_CACHE
    })
  }
  render () {
    const { classes, name, screenshot_url } = this.props
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
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
            Share
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
