import React from 'react';
import './ProductSkeleton.css';

const ProductsGridSkeleton = ({ items = 8, columns = 4 }) => {
  return (
    <div className="products-grid-skeleton">
      <div className="skeleton-filters">
        <div className="skeleton-filter"></div>
        <div className="skeleton-filter"></div>
        <div className="skeleton-filter"></div>
      </div>
      
      <div className="skeleton-products-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: items }).map((_, index) => (
          <div key={index} className="skeleton-product-card">
            <div className="skeleton-card-image"></div>
            <div className="skeleton-card-content">
              <div className="skeleton-card-title"></div>
              <div className="skeleton-card-price"></div>
              <div className="skeleton-card-rating">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="skeleton-star"></div>
                ))}
              </div>
              <div className="skeleton-card-button"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="skeleton-pagination">
        <div className="skeleton-page"></div>
        <div className="skeleton-page active"></div>
        <div className="skeleton-page"></div>
        <div className="skeleton-page"></div>
      </div>
    </div>
  );
};

export default ProductsGridSkeleton;
