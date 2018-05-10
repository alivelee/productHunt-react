import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import { history } from '../../store'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LoginComponent from '../../container/Login'
import AuthRedirectComponent from '../../container/Auth'
import PostItemDetail from '../../container/Posts/detail'
import CollectionDetail from '../../container/Collections/detail'
import Posts from '../../container/Posts'
import Collections from '../../container/Collections'
import Topics from '../../container/Topics'
import TopicDetail from '../../container/Topics/detail'
import UserDetail from '../../container/User/detail'
import LeftNavigation from '../Navigation/left'
import UserMenu from '../User/userMenu'
import RedirectComponent from '../../container/RedirectComponent'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: false
    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  openMenu = () => {
    this.setState({
      left: true,
    });
    
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  linkToLogin = () => {
    this.props.dispatch(push('/login'))
  }
  render () {
    const { classes, user } = this.props
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openMenu}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="headline" color="inherit" className={classes.flex}>
                  productHunt-React
                </Typography>
                {!user.userInfo && <Button color="inherit" onClick={this.linkToLogin}>Login</Button>}
                
                {user.userInfo && <UserMenu dispatch={this.props.dispatch} user={this.props.user}/>}
              </Toolbar>
            </AppBar>
          </div>
          
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              <LeftNavigation />
            </div>
          </Drawer>
          <Switch>
            <Route exact path='/callback' component={AuthRedirectComponent} />
            <Route exact path='/post' component={Posts} />
            <Route exact path='/' component={RedirectComponent} />
            <Route exact path='/collection' component={Collections} />
            <Route exact path='/topic' component={Topics} />
            <Route exact path='/topic/:topicId' component={TopicDetail} />
            <Route exact path='/login' component={LoginComponent} />
            <Route exact path='/post/:postId' component={PostItemDetail} />
            <Route exact path='/collection/:collectionId' component={CollectionDetail} />
            <Route exact path='/user/:userId' component={UserDetail} />
          </Switch>
        </Fragment>
      </ConnectedRouter>

    )
  }
}

export default withStyles(styles)(App)
