import React from 'react';
import './RankingListFlowerItem.scss';

const RankingListFlowerItem = (props) => {
  return (
    <div className="itemContainer">
      <div className="rankingBox">
        {props.data.ranking}
      </div>
      <div className="cultivarName">
        {props.data.name}
      </div>
      <div className="growerName">
        {props.data.grower}
      </div>
      <div className="shop">
        {props.data.shop}
      </div>
    </div>
  )
}

export default RankingListFlowerItem;