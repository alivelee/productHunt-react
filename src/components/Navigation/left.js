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
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

class LeftNavigation extends React.Component {
  render () {
    return (
      <React.Fragment>
        <List>
          <Link to='/collection'>
            <ListItem button>
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary="Collection" />
            </ListItem>
          </Link>
          <Link to='/topic'>
            <ListItem button>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Topic" />
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem button>
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Posts"/>
            </ListItem>
          </Link>
        </List>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(LeftNavigation)
