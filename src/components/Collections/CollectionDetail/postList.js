import React from 'react'
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemText } from 'material-ui/List'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

class PostList extends React.Component {
  linkToPostDetail = (id) => {
    console.log(id)
  }
  render () {
    return (
      <React.Fragment>
        <ListItem button onClick={ () => this.linkToPostDetail(this.props.id)}>
          <ListItemText primary={this.props.name} secondary={this.props.tagline}/>
        </ListItem>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PostList)
