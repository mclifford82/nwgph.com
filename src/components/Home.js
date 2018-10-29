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
        { name: 'South Fork Kush', grower: 'Benson Elvis', shop: 'Americann Rx', thc: '', cbd: '' },
        { name: 'Scooby Snacks #2', grower: 'Heroes of the Farm', shop: 'Americann Rx', thc: '', cbd: '' },
        { name: 'Gorilla Glue #4', grower: 'Sunshine Farms', shop: 'High End Marketplace', thc: '', cbd: '' },
        { name: 'GMO Cookies', grower: 'Resin Ranchers', shop: 'Archive Portland', thc: '', cbd: '' },
        { name: 'Zkittlez', grower: 'The Heights Co.', shop: 'Archive Portland', thc: '', cbd: '' },
      ],
      oilRankingList: [
        { name: 'Cherry Limeade', type: 'BHO', processor: 'Funk Extracts', grower: undefined, shop: 'Americann Rx', thc: '', cbd: '' },
        { name: 'Sour Diesel', type: 'BHO', processor: 'Funk Extracts', grower: undefined, shop: 'Americann Rx', thc: '', cbd: '' },
        { name: 'Zookies', type: 'BHO', processor: 'Funk Extracts', grower: undefined, shop: 'Americann Rx', thc: '', cbd: '' },
        { name: 'Banana Peel', type: 'BHO', processor: 'Kush Family Originals', grower: 'Kush Family Orignals', shop: 'High End Marketplace', thc: '', cbd: '' },
        { name: 'Raspberry Creme', type: 'Hash Rosin', processor: 'Happy Cabbage', grower: 'Happy Cabbage', shop: 'Americann Rx', thc: '', cbd: '' },
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
            title={'Flower'}
            data={this.state.flowerRankingList}
          />
          <RankingList
            title={'Concentrate'}
            data={this.state.oilRankingList}
          />
        </div>
      </div>
    );
  }
}

export default Home;