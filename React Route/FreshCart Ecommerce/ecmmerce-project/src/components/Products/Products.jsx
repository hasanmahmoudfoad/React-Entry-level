import React from "react";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import axios from "axios";
import { Link } from "react-router";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

export default function Products() {
  const { addToCart, getCartItems, cartLoading } = useContext(cartContext);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProductId, setLoadingProductId] = useState(null);

  async function fetchAllProducts() {
    try {
      const { data } = await axios(
        "https://ecommerce.routemisr.com/api/v1/Products"
      );
      setProducts(data.data);
      console.log(`Products data`, data);
    } catch (error) {
      console.error("Error fetching Products: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4">Products Component</h2>

        <div className="row">
          {Products.map((product) => (
            <div key={product._id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="product-card overflow-hidden card h-100 ">
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/ProductDetails/" + product._id}
                >
                  <Slider images={product.images} id={product._id} />
                </Link>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <div className="d-flex justify-content-between">
                    <p className="text-start">
                      In stock: <b>{product.quantity}</b>
                    </p>
                    <div>
                      {product.ratingsAverage}
                      <span>
                        <i className="fa-solid fa-star text-warning"></i>
                      </span>
                    </div>
                  </div>

                  <div className="position-relative">
                    <button
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasScrolling"
                      aria-controls="offcanvasScrolling"
                      type="button"
                      onClick={async () => {
                        await addToCart(product._id);
                        await getCartItems();
                      }}
                      className="btn btn-primary w-100 btn-md"
                    >
                      Add to cart <span className="ms-1"> | </span>
                      <b>
                        {product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        $
                      </b>
                    </button>
                    {loadingProductId && product._id ? (
                      <div className="text-center position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 z-3 d-flex align-items-center justify-content-center">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
