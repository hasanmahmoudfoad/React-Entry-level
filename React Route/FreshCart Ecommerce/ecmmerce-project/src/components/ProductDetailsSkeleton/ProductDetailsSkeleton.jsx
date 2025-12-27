import React from 'react'
import styles from './ProductDetailsSkeleton.module.css';
export default function ProductDetailsSkeleton() {
    return (
    <div className="container my-5">
      <div className="row">
        {/* Left Column - Image Skeleton */}
        <div className="col-12 col-md-6">
          <div className="skeleton-image mb-4">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '400px', width: '100%' }}></div>
            </div>
          </div>
          <div className="d-flex gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="skeleton-thumbnail">
                <div className="placeholder-wave">
                  <div className="placeholder bg-secondary rounded" style={{ height: '80px', width: '80px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content Skeleton */}
        <div className="col-12 col-md-6">
          {/* Title Skeleton */}
          <div className="skeleton-title mb-3">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '40px', width: '80%' }}></div>
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="skeleton-price mb-3">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '30px', width: '30%' }}></div>
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="skeleton-description mb-4">
            <div className="placeholder-wave mb-2">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '100%' }}></div>
            </div>
            <div className="placeholder-wave mb-2">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '90%' }}></div>
            </div>
            <div className="placeholder-wave mb-2">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '85%' }}></div>
            </div>
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '70%' }}></div>
            </div>
          </div>

          {/* Rating Skeleton */}
          <div className="skeleton-rating mb-3">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '25px', width: '40%' }}></div>
            </div>
          </div>

          {/* Quantity/Stock Skeleton */}
          <div className="skeleton-stock mb-3">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '25px', width: '50%' }}></div>
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="skeleton-actions d-flex gap-3 mb-4">
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '50px', width: '150px' }}></div>
            </div>
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '50px', width: '150px' }}></div>
            </div>
          </div>

          {/* Additional Info Skeleton */}
          <div className="skeleton-info">
            <div className="placeholder-wave mb-2">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '60%' }}></div>
            </div>
            <div className="placeholder-wave">
              <div className="placeholder bg-secondary rounded" style={{ height: '20px', width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
   
  
}
