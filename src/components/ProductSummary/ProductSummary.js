import React from 'react';
import './ProductSummary.css';

const ProductSummary = (props) => {
  const { name, grower, processor, classification } = props;
  return (
    <div>
      <div className="titleBlock">
        <div className="productName">
          {name}
        </div>
        <div className="byLine">
          {processor} x {grower}
        </div>
      </div>
    </div>
  )
}

export default ProductSummary;