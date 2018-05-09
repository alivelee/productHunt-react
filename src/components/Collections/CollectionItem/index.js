import React from 'react'
import { withStyles } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import Button from 'material-ui/Button'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { push } from 'react-router-redux'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import dayjs from 'dayjs'

const styles = theme => ({
  card: {
    width: 415,
    height: 250,
    margin: '10px'
  },
  actions: {
    display: 'flex'
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50
  },
  title: {
    height: 50
  }
})

class CollectionListItem extends React.Component {
  linkToCollectionDetail = (id) => {
    console.log(id)
    this.props.dispatch(push(`collection/${id}`))
  }
  render () {
    const { classes, name, title, user: { image_url }, created_at, id } = this.props
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
            <Typography component="p" className={classes.title}>
              {title}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button color="primary" onClick={ () => this.linkToCollectionDetail(id)}>
              Detail
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CollectionListItem)
