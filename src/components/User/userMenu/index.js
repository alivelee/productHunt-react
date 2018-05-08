import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from 'material-ui/Switch'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Menu, { MenuItem } from 'material-ui/Menu'
import { push } from 'react-router-redux'
import Avatar from 'material-ui/Avatar'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class UserMenu extends React.Component {
  state = {
    open: false,
    anchorEl:  null
  }
  handleMenu = (e) => {
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  linkToUserPage = (id) => {
    this.props.dispatch(push(`/user/${id}`))
    this.handleClose()
  }
  render () {
    const { open, anchorEl } = this.state
    const { user : { userInfo } } = this.props
    return (
      <React.Fragment>
        <Avatar alt="Remy Sharp" src={userInfo.image_url['40px']} onClick={this.handleMenu} />
        <Menu
          anchorEl={anchorEl}
          id="menu-appbar"
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={ () => this.linkToUserPage(userInfo.id)}>Profile</MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(UserMenu)
