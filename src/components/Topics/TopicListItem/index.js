import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import { push } from 'react-router-redux'


class TopicListItem extends React.Component {
  topicDetail = (topicId) => {
    this.props.dispatch(push(`/topic/${topicId}`))
    console.log('clicked')
  }
  render () {
    return (
      <ListItem divider button onClick={ () => this.topicDetail(this.props.id)}>
        <ListItemText
          primary={this.props.name}
          secondary={this.props.description}
        />
      </ListItem>
    )
  }
}

export default TopicListItem
