import React from 'react'
import styles from './Brands.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen'

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllBrands() {
    try {
      const { data } = await axios('https://ecommerce.routemisr.com/api/v1/brands');
      setBrands(data.data || []);
      console.log('Brands data', data);
    } catch (error) {
      console.error('Error fetching Brands: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllBrands();
  }, []);

  if (loading) return <LoadingScreen />

  return (
    <>
      <div className="container my-5"> {/* Bootstrap container and spacing */}
        <h2 className="text-center mb-4">Brands Component</h2>
        <div className="row"> {/* Bootstrap row for grid layout */}
          {
            brands.map((brand) => (
              <div key={brand._id} className="col-md-3 col-sm-6 mb-4"> {/* Responsive columns */}
                <div className="card h-100"> {/* Card with full height */}
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="card-img-top img-fluid" // Card image
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{brand.name}</h5> {/* Center title */}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
