import React, { useState, useEffect } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router";
import axios from "axios";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";
import ProductDetailsSkeleton from "../ProductDetailsSkeleton/ProductDetailsSkeleton";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

export default function ProductDetails() {
  let { id } = useParams();
  // console.log(id);

  const [ProductDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  let { addToCart } = useContext(cartContext);

  async function addProduct(id) {
    let resp = await addToCart(id);
    console.log(resp);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    let { data } = await axios(
      `https://ecommerce.routemisr.com/api/v1/Products/${id}`
    );
    // console.log(data.data);
    setProductDetail(data.data);
    setLoading(false);
  }
  if (loading) return <ProductDetailsSkeleton />;

  return (
    <>
      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="productSlider">
            {ProductDetail.images ? (
              <ProductImagesSlider propImages={ProductDetail.images} />
            ) : null}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="productDetails my-4">
            <div className="productMianInfo">
              {ProductDetail ? (
                <>
                  <div className="d-flex justify-content-between align-items-center gap-2 my-3">
                    <h1 className="display-3">{ProductDetail.title}</h1>
                    <h3 className="display-6 text-body-secondary">
                      <b>{ProductDetail.price}$</b>
                    </h3>
                  </div>
                  <p className=" my-3">{ProductDetail.description}</p>
                </>
              ) : (
                ""
              )}
              {ProductDetail ? (
                <div className="text-start">
                  <mark>
                    {ProductDetail.ratingsAverage}{" "}
                    <i className="fa-solid fa-star"></i>
                  </mark>
                  <span className="py-2 px-3">
                    rated by <b>{ProductDetail.ratingsQuantity}</b> users
                  </span>
                </div>
              ) : (
                ""
              )}
              {
                <>
                  <div className="d-flex align-items-center gap-2 my-3">
                    <i
                      className={`fa-solid fa-circle-dot ${
                        ProductDetail.quantity > 10
                          ? "text-success"
                          : "text-danger"
                      }`}
                    ></i>
                    <span>
                      Quantity: {ProductDetail.quantity}
                      {ProductDetail.quantity > 100 && " (In Stock)"}
                      {ProductDetail.quantity <= 100 &&
                        ProductDetail.quantity > 0 &&
                        " (Low Stock)"}
                      {ProductDetail.quantity === 0 && " (Out of Stock)"}
                    </span>
                  </div>
                  <div
                    className="alert alert-primary my-2"
                    style={{ maxWidth: "300px" }}
                    role="alert"
                  >
                    {ProductDetail.sold >= 1000
                      ? `Sold +${ProductDetail.sold} times`
                      : `Sold ${ProductDetail.sold} times`}
                  </div>
                </>
              }
              <form>
                <legend>Select the product quantity</legend>
                <div className="mb-3">
                  <label htmlFor="productQuantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="productQuantity"
                    className="form-control"
                    min={1}
                    max={10}
                    defaultValue={1}
                  />
                </div>
                <button
                type="button"
                  onClick={() => addProduct(ProductDetail._id)}
                  className="btn btn-primary w-100 btn-lg"
                >
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
