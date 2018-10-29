import React, { Component } from 'react';

const RankingListItem = (props) => {
  return (
    <div>
      <em>{props.data.name}</em>
    </div>
  )
}

export default RankingListItem;