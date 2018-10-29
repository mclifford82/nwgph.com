import React, { Component } from 'react';
import RankingListItem from './RankingListItem';

class RankingList extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    return (
      <pre>
        {JSON.stringify(this.props, undefined, 4)}
      </pre>
    )
  }
}

export default RankingList;