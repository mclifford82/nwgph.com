import React, { Component } from 'react';
import RankingList from './RankingList/RankingList';

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
        { name: 'Gorilla Glue #4', grower: 'Sunshine Farms', shop: 'High End Marketplace', thc: '25.14', cbd: '0' },
        { name: 'Han Solo Burger', grower: 'Hydrus Hydroponics', shop: 'Americanna Rx', thc: '23.10', cbd: '0.04' },
        { name: 'Gelato Cake', grower: 'Urban Canna', shop: 'Americanna Rx', thc: '28.6', cbd: '0.1' },
        { name: 'South Fork Kush', grower: 'Benson Elvis', shop: 'Americanna Rx', thc: '', cbd: '' },
        { name: 'Do-Si-Dos', grower: 'Canna Organix', shop: 'High End Marketplace', thc: '23.2', cbd: '0.0' },
      ],
      oilRankingList: [
        { name: 'Scott\'s OG', type: 'Live Rosin', processor: 'Nelson & Co.', grower: '', shop: 'Americanna Rx', thc: '73.84', cbd: '0.16', pricePoint: '$$' },
        { name: 'Sour Diesel', type: 'BHO', processor: 'Funk Extracts', grower: 'Ananda Farms', shop: 'Americanna Rx', thc: '', cbd: '', pricePoint: '$$' },
        { name: 'White Tahoe Cookies', type: 'Hash Rosin', processor: 'Happy Cabbage Farms', grower: '', shop: 'Americanna Rx', thc: '', cbd: '', pricePoint: '$$' },
        { name: 'Cookies and Creme', type: 'Hash Rosin', processor: 'Happy Cabbage Farms', grower: '', shop: 'Americanna Rx', thc: '', cbd: '', pricePoint: '$$' },
        { name: 'Clementine', type: 'BHO', processor: 'Willamette Valley Alchemy', grower: 'Siren Cannabis', shop: 'Americanna Rx', thc: '71.3', cbd: '0.98', pricePoint: '$' },
      ],
    }
  }

  render() {
    return (
      <div>
        <div style={rankingListContainer}>
          <RankingList
            title={'Flower'}
            lastUpdated={'11/04/2018'}
            data={this.state.flowerRankingList}
          />
          <RankingList
            title={'Concentrate'}
            lastUpdated={'11/04/2018'}
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