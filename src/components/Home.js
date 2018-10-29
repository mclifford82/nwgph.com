import React, { Component } from 'react';
import RankingList from './RankingList/RankingList';

const pageTitle = {
  fontSize: '3rem',
  color: '#4f4f4f',
  fontFamily: 'Catamaran, sans-serif',
  fontWeight: 800,
  textAlign: 'center',
  margin: '0px',
};

const pageSubtitle = {
  color: '#8f8f8f',
  fontSize: '1rem',
  fontStyle: 'italic',
  textAlign: 'center',
  margin: '0px 0px',
  textTransform: 'lowercase',
}

const rankingListContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridColumnGap: '15px',
}

const warningText = {
  textAlign: 'center',
  fontStyle: 'italic',
  color: '#8f8f8f',
  fontWeight: 600,
  margin: '10px 0px',
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowerRankingList: [
        { name: 'South Fork Kush', grower: 'Benson Elvis', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Gorilla Glue #4', grower: 'Sunshine Farms', shop: 'High End Marketplace', thc: '', cbd: '' },
        { name: 'Scooby Snacks #2', grower: 'Heroes of the Farm', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Zkittlez', grower: 'The Heights Co.', shop: 'Archive Portland', thc: '23.7%', cbd: '' },
        { name: 'Gelato Cake', grower: 'Urban Canna', shop: 'Americanna Rx', thc: '28.6%', cbd: '0.1%' },
      ],
      oilRankingList: [
        { name: 'Sour Diesel', type: 'BHO', processor: 'Funk Extracts', grower: 'Ananda Farms', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Cherry Limeade', type: 'BHO', processor: 'Funk Extracts', grower: 'OGO Pure Fire', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Zookies', type: 'BHO', processor: 'Funk Extracts', grower: 'Poseidon Element', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Banana Peel', type: 'BHO', processor: 'Kush Family Originals', grower: 'Kush Family Orignals', shop: 'High End Marketplace', thc: '', cbd: '' },
        { name: 'Raspberry Creme', type: 'Hash Rosin', processor: 'Happy Cabbage', grower: 'Happy Cabbage', shop: 'Americanna Rx', thc: '', cbd: '' },
      ],
    }
  }

  render() {
    return (
      <div>
        <h1 style={pageTitle}>northwestgreens</h1>
        <h3 style={pageSubtitle}>The World's Most Trusted Cannabis Opinion</h3>
        <div style={rankingListContainer}>
          <RankingList
            title={'Flower'}
            lastUpdated={'10/28/2018'}
            data={this.state.flowerRankingList}
          />
          <RankingList
            title={'Concentrate'}
            lastUpdated={'10/28/2018'}
            data={this.state.oilRankingList}
          />
        </div>
        <div style={warningText}>
          The opinions above are that of the world's #1 trusted source for cannabis opinions. Ignore at your own risk.
        </div>
      </div>
    );
  }
}

export default Home;