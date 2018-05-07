import React from 'react'
import { withStyles } from 'material-ui/styles'
import Description from '@material-ui/icons/Description'
import Book from '@material-ui/icons/Book'
import Chat from '@material-ui/icons/Chat'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import {
  Link
} from 'react-router-dom'
const styles = {
  link: {
    textDecoration: 'none'
  }
}

class LeftNavigation extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <List>
          <Link to='/collection' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary="Collection" />
            </ListItem>
          </Link>
          <Link to='/topic' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Topic" />
            </ListItem>
          </Link>
          <Link to='/' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Posts" Z/>
            </ListItem>
          </Link>
        </List>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(LeftNavigation)
