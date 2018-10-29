import React, { Component } from 'react';
import RankingListFlowerItem from './RankingListFlowerItem';
import RankingListOilItem from './RankingListOilItem';

const rankingListContainer = {
  padding: '5px',
  display: 'grid',
  gridTemplateRows: '50px repeat(5, 1fr)',
  gridRowGap: '10px',
}

const rankingTitle = {
  textAlign: 'center',
  padding: '10px 0px',
  fontFamily: 'Catamaran, sans-serif',
  fontSize: '1.5rem',

}

class RankingList extends Component {
  constructor(props) {
    super(props)
    this.listLength = this.props.data.length;
  }

	render() {
    return (
      <div style={rankingListContainer}>
        <div style={rankingTitle}>
          Top {this.listLength} {this.props.title} Rankings
        </div>
        {this.props.data.map((item, index) => {
          item['ranking'] = index + 1;
          return this.props.title === 'Flower' ?
                <RankingListFlowerItem data={item} /> :
                <RankingListOilItem data={item} />
        })}
      </div>
    )
  }
}

export default RankingList;