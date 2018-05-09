import React from 'react'
import shortid from 'shortid'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Grid from 'material-ui/Grid'
import { CircularProgress } from 'material-ui/Progress'
import CollectionListItem from './CollectionItem'
import * as actionTypes from '../../types'
import { withStyles } from 'material-ui/styles'
import LoadMore from '../LoadMore'
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
    margin: '20px auto',
    width: '90vw'
  }
})
class Collections extends React.Component {
  state = {
    initialPage: 1,
    condition: {
      'search[featured]': true,
      'per_page': 40
    }
  }
  componentDidMount () {
    this.getFeatureCollection()
  }
  getFeatureCollection = () => {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'search[featured]': true,
        'per_page': 40
      }
    })
    this.setState({
      condition: {
        'search[featured]': true,
        'per_page': 40
      },
      initialPage: 1,
    })
  }
  getLatestCollection = () => {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'per_page': 40
      }
    })
    this.setState({
      condition: {
        'per_page': 40
      },
      initialPage: 1,
    })
  }
  getlatestCreateCollection = () => {
    this.props.dispatch({
      type: actionTypes.GET_COLLECTIONS_REQUEST,
      payload: {
        'per_page': 40,
        'sort_by': 'created_at',
        'order': 'asc'
      }
    })
    this.setState({
      condition: {
        'per_page': 40,
        'sort_by': 'created_at',
        'order': 'asc'
      },
      initialPage: 1,
    })
  }
  getMore = () => {
    this.setState({
      initialPage: this.state.initialPage + 1
    })
    this.props.dispatch({
      type: actionTypes.GET_MORE_COLLECTIONS_REQUEST,
      payload: {
        ...this.state.condition,
        page: this.state.initialPage + 1
      }
    })
  }
  render () {
    console.log(this.props.collections)
    const { collectionListData, loading, moreLoading } = this.props.collections
    return (
      <React.Fragment>
        {loading &&
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} sm={9} md={9} className={this.props.classes.loadingItem}>
              <CircularProgress className={this.props.classes.progress} size={50} />
            </Grid>
          </Grid>
        }
        {!loading &&
          <React.Fragment>
            <Grid container justify='flex-start' className={this.props.classes.gridContainer}>
            <Grid item xs={12} sm={9} md={9}>
              <Grid container>
                {collectionListData.map(item =>
                  <Grid item key={shortid.generate()}>
                    <CollectionListItem {...item} dispatch={this.props.dispatch}/>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <List component="nav">
                <ListItem button onClick={this.showAllTopicRequest}>
                  <ListItemText primary="Feature Collection" onClick={this.getFeatureCollection}/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Latest Collection" onClick={this.getLatestCollection}/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Recently Created" onClick={this.getlatestCreateCollection}/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <LoadMore loading={moreLoading} action={this.getMore}/>
          </React.Fragment>
        }
      
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Collections)
