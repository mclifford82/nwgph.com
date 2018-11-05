import React, { Component } from 'react';

const RankingListOilItem = (props) => {

  const itemContainer = {
    display: 'grid',
    gridTemplateColumns: '100px 4fr',
    gridTemplateRows: '1fr repeat(2, 1fr)',
    alignItems: 'center',
    height: '80px',
  }

  const rankingBox = {
    gridRowStart: 1,
    gridRowEnd: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F4A460',
    fontSize: '4rem',
    fontStyle: 'italic',
  }

  const cultivarName = {
    fontSize: '1.5rem',
    fontWeight: 800,
  }

  const processor = {
    fontStyle: 'italic',
    fontWeight: 800,
  }

  const typeName = {
    fontSize: '0.8rem',
    fontStyle: 'italic',
    display: 'inline',
  }

  const shop = {
 
  }

  return (
    <div style={itemContainer}>
      <div style={rankingBox}>
        {props.data.ranking}
      </div>
      <div style={cultivarName}>
        {props.data.name} <div style={typeName}>{props.data.type}</div>
      </div>
      <div style={processor}>
        {props.data.processor} {props.data.grower && 'x ' + props.data.grower || '(single source)'}
      </div>
      <div style={shop}>
        {props.data.shop}
      </div>
    </div>
  )
}

export default RankingListOilItem;