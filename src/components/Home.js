import React, { Component } from 'react';
import RankingList from './RankingList/RankingList';

const pageTitle = {
  fontSize: '3rem',
  color: '#4f4f4f',
  fontFamily: 'Catamaran, sans-serif',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: '0px',
};

const pageSubtitle = {
  color: '#8f8f8f',
  fontSize: '1.5rem',
  fontStyle: 'italic',
  textAlign: 'center',
  marginTop: '0px',
  textTransform: 'lowercase',
}

const rankingListContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: '15px',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowerRankingList: [
        { name: 'South Fork Kush', grower: 'Benson Elvis' },
        { name: 'Scooby Snacks #2', grower: 'Heroes of the Farm' },
        { name: 'Gorilla Glue #4', grower: 'Sunshine Farms' },
        { name: 'GMO Cookies', grower: 'Resin Ranchers' },
        { name: 'Zkittlez', grower: 'The Heights Co.' },
      ],
      oilRankingList: [
        { name: 'Cherry Limeade', type: 'BHO', processor: 'Funk Extracts', grower: undefined },
        { name: 'Sour Diesel', type: 'BHO', processor: 'Funk Extracts', grower: undefined },
        { name: 'Zookies', type: 'BHO', processor: 'Funk Extracts', grower: undefined },
        { name: 'Banana Peel', type: 'BHO', processor: 'Kush Family Originals', grower: 'Kush Family Orignals' },
        { name: 'Raspberry Creme', type: 'Hash Rosin', processor: 'Happy Cabbage', grower: 'Happy Cabbage' },
      ],
    }
  }

  render() {
    return (
      <div>
        <h1 style={pageTitle}>northwestgreens</h1>
        <h3 style={pageSubtitle}>The World's Most Trusted Cannabis Opinions</h3>
        <div style={rankingListContainer}>
          <RankingList
            data={this.state.flowerRankingList}
          />
          <RankingList
            data={this.state.oilRankingList}
          />
        </div>
      </div>
    );
  }
}

export default Home;