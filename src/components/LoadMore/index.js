import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import green from 'material-ui/colors/green'
import { CircularProgress } from 'material-ui/Progress'
import classNames from 'classnames'
const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    textAlign: 'center',
    marginBottom: 20,
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})

class LoadMore extends React.Component {
  render () {
    const { classes, loading } = this.props
    const buttonClassname = classNames({
      [classes.buttonSuccess]: loading
    });
    console.log('buttonLoading', loading)
    return (
      <React.Fragment>
        <Grid container justify='center' alignContent='center'>
          <Grid item xs={12} sm={9} md={9} className={this.props.classes.button}>
            <Button
              variant="raised"
              color="primary"
              className={buttonClassname}
              onClick={this.props.action}
              disabled={loading}
            >
            Load More
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} /> }
          </Grid>
        </Grid>

      </React.Fragment>
    )
  }
}

export default withStyles(styles)(LoadMore)
