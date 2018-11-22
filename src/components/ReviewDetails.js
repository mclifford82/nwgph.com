import React from 'react';
import ProductSummary from './ProductSummary/ProductSummary';
import TerpeneChart from './TerpeneChart/TerpeneChart';

class ReviewDetails extends React.Component {
  render() {
    const { name, grower, processor, shop, cannabinoids, classification, terpenes } = this.props.data;
    return (
      <div>
        <ProductSummary
          name={name}
          grower={grower}
          processor={processor}
          shop={shop}
          cannabinoids={cannabinoids}
          classification={classification}
        />
        {terpenes && <TerpeneChart
          terpenes={terpenes}
        />}
      </div>
    )
  }
}

export default ReviewDetails;