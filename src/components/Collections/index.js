import React from 'react'
import shortid from 'shortid'
import Paper from 'material-ui/Paper'
import List from 'material-ui/List'
import Grid from 'material-ui/Grid'
import { CircularProgress } from 'material-ui/Progress'
import CollectionListItem from './CollectionItem'
import * as actionTypes from '../../types'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  loadingItem: {
    textAlign: 'center'
  },
  gridContainer: {
    margin: 'auto'
  }
})
class Collections extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'search[featured]': true,
        'per_page': 40
      }
    })
  }
  render () {
    console.log(this.props.collections)
    const { collectionListData } = this.props.collections
    return (
      <React.Fragment>
        {collectionListData.length === 0 &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} className={this.props.classes.loadingItem} >
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {collectionListData.length !== 0 &&
          <Grid container alignContent='center' justify='flex-start' className={this.props.classes.gridContainer}>
            {collectionListData.map(item =>
              <Grid item key={shortid.generate()}>
                <CollectionListItem {...item} dispatch={this.props.dispatch}/>
              </Grid>
            )}
          </Grid>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Collections)
