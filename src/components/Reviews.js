import React from 'react';
import ReviewDetails from './ReviewDetails';

const debug = true;

const testTerps = [
  {
    name: 'MAC1 Live Resin Budder',
    grower: 'Benson Elvis',
    processor: 'Echo Electuary',
    shop: 'Americanna Rx',
    cost: 30,
    thc: 74.0,
    cbd: 0.0,
    classification: [
      { name: 'indica', amount: 70.0 },
      { name: 'sativa', amount: 30.0 },
    ],
    terpenes: [
      { name: 'limonene', amount: 2.8 },
      { name: 'b-caryophyllene', amount: 0.8 },
      { name: 'valencene', amount: 0.7 },
      { name: 'myrcene', amount: 0.6 },
      { name: 'a-bisabolol', amount: 0.5 },
      { name: 'other', amount: 2.5 }
    ],
  },
  {
    name: 'Sour Diesel Live Resin',
    cultivar: {
      name: 'Sour Diesel',
      linage: {
        mother: 'Chemdawg 91',
        father: 'Super Skunk',
      }
    },
    grower: 'ananda farms',
    processor: 'Funk Extracts',
    cost: 46,
    classification: [
      { name: 'indica', amount: 20.0 },
      { name: 'sativa', amount: 80.0 },
    ],
    cannabinoids: [
      { name: 'thc', amount: 71.32 },
      { name: 'cbd', amount: 0.12 },
      { name: 'cbg', amount: 1.34 },
    ],
    terpenes: [
      { name: 'b-caryophyllene', amount: 1.79 },
      { name: 'cis-nerolidol', amount: 1.48 },
      { name: 'b-myrcene', amount: 0.94 },
      { name: 'geranyl acetate', amount: 0.89 },
      { name: 'limonene', amount: 0.81 },
      { name: 'b-nerolidol', amount: 0.78 },
      { name: 'other', amount: 2.43 },
    ],
  },
  {
    name: 'Blood Orange Tangie Terps on the Rocks',
    grower: 'Benson Elvis',
    processor: 'Echo Electuary',
    shop: 'Natural Wonders',
    cost: 72,
    total: 7.9,
    terpenes: [
      { name: 'myrcene', amount: 9.4 },
      { name: 'a-pinene', amount: 1.2 },
      { name: 'limonene', amount: 0.7 },
      { name: 'b-caryophyllene', amount: 0.7 },
      { name: 'b-pinene', amount: 0.6 },
      { name: 'other', amount: 1.4 }
    ],
  },
  {
    name: 'Cherry Chem',
    total: 9.4,
    terpenes: [
      { name: 'myrcene', amount: 2.9 },
      { name: 'b-caryophyllene', amount: 2.4 },
      { name: 'limonene', amount: 1.3 },
      { name: 'valencene', amount: 0.9 },
      { name: 'a-humulene', amount: 0.7 },
      { name: 'other', amount: 1.2 }
    ],
  }
];

class Reviews extends React.Component {

  render() {
    debug && console.log('Debug: Product obj', testTerps[1]);
    return (
      <div>
        <ReviewDetails
          data={testTerps[1]}
        />
      </div>
    )
  }
}

export default Reviews;