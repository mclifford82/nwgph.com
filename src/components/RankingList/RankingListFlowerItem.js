import React, { Component } from 'react';

const RankingListFlowerItem = (props) => {
  const itemContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridTemplateRows: '2fr repeat(2, 1fr)',
    alignItems: 'center',
  }

  const rankingBox = {
    gridRowStart: 1,
    gridRowEnd: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#98c377',
    fontSize: '4rem',
    fontStyle: 'italic',
  }

  const cultivarName = {
    fontSize: '1.7rem',
    fontWeight: 800,
  }

  const grower = {
    fontStyle: 'italic',
    fontWeight: 800,
  }

  const shop = {
 
  }

  return (
    <div style={itemContainer}>
      <div style={rankingBox}>
        {props.data.ranking}
      </div>
      <div style={cultivarName}>
        {props.data.name}
      </div>
      <div style={shop}>
        {props.data.shop}
      </div>
    </div>
  )
}

export default RankingListFlowerItem;