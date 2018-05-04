import React from 'react'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  loadingItem: {
    textAlign: 'center'
  }
})

class Loading extends React.Component {
  render () {
    return (
      <Grid container justify='center' alignContent='center'>
        <Grid item xs={12} className={this.props.classes.loadingItem}>
          <CircularProgress className={this.props.classes.progress} size={50} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Loading)
