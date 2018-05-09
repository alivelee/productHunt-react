import React from 'react'
import { withRouter } from 'react-router-dom'
import { PRODUCT_HUNT_API_KEY } from '../../constants/clientId'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

const authUrl = `https://api.producthunt.com/v1/oauth/authorize?client_id=${PRODUCT_HUNT_API_KEY}&redirect_uri=https://producthunt-react.herokuapp.com/callback&response_type=code&scope=public+private`
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  login: {
    color: '#fff',
    textDecoration: 'none'
  },
  container: {
    height: '90vh'
  }
})
class Menu extends React.Component {
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    const { isLogin, dispatch, classes } = this.props
    // console.log(isLogin)
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center" className={classes.container}>
          <Grid item>
            <Button variant="raised" color="primary" className={classes.button}>
              <a href={authUrl} className={classes.login}>Login to get token</a>
            </Button>
          </Grid>
        </Grid>

      </React.Fragment>
    )
  }
}

export default withStyles(styles)(withRouter(Menu))
