import React from 'react'
import { withStyles } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import dayjs from 'dayjs'

const styles = theme => ({
  card: {
    width: 415,
    height: 300,
    margin: '10px'
  },
  actions: {
    display: 'flex'
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50
  }
})

class CollectionListItem extends React.Component {
  render () {
    const { classes, name, title, user : { image_url }, created_at } = this.props
    const collectionDate = dayjs(new Date(created_at))
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} src={image_url['50px']}/>
            }
            title={name}
            subheader={`${collectionDate.year()}-${collectionDate.month() + 1}-${collectionDate.date()}`}
          />
          <CardContent>
            <Typography component="p">
              {title}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CollectionListItem)
