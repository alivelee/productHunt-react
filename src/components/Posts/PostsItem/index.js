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
    width: '350px',
    height: '250px',
    margin: '10px'
  },
  media: {
    height: 0,
    paddingTop: '35.25%' // 16:9
  },
  header: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
}

class PostListItem extends React.Component {
  postDetail = (id) => {
    console.log(id)
    this.props.dispatch(push(`/post/${id}`))
  }
  render () {
    const { classes, name, screenshot_url, id } = this.props
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={screenshot_url['850px']}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="headline" component="h2" className={classes.header}>
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={ () => this.postDetail(id)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PostListItem)
