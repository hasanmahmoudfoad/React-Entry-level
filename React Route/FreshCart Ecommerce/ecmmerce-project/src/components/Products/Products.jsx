import React from 'react'
import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import axios from 'axios';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Link } from 'react-router';


export default function Products() {
  const [Products, setProducts] = useState([]);

  async function fetchAllProducts() {
    try {
      const { data } = await axios('https://ecommerce.routemisr.com/api/v1/Products');
      setProducts(data.data);
      console.log(`Products data`, data);
    } catch (error) {
      console.error("Error fetching Products: ", error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div className="container my-5"> {/* Bootstrap container and spacing */}
        <h2 className="text-center mb-4">Products Component</h2>

        <div className="row"> {/* Bootstrap row for grid layout */}
          {
            Products.map((product) => (
              <div key={product._id} className="col-12 col-md-6 col-lg-4 mb-4">
                <Link to={'/ProductDetails/'+ product._id}>
                  <div className="product-card card h-100">

                    <Slider images={product.images} id={product._id} />

                    <div className="card-body">
                      <h5 className="card-title text-center">{product.title}</h5>
                      {/* <h5 className="card-title text-center">{product.title}</h5> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
