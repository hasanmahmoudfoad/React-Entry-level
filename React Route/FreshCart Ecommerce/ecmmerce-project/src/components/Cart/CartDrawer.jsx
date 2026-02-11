import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/cartContext";

export default function CartDrawer({ userData, userToken }) {
  const {
    getCartItems,
    clearAllCart,
    deleteCartItem,
    editCartItem,
    cartData,
    cartLoading,
  } = useContext(cartContext);

  // Create this function in your component or utils file
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <div
        className="offcanvas shadow-lg offcanvas-start w-50"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ maxWidth: "500px", minWidth: "320px" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Shopping basket
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body ">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="flex-grow-1 w-100">
              {cartData ? (
                <span className="text-success">{cartData.numOfCartItems} </span>
              ) : (
                <span className="text-success">No </span>
              )}
              items in your basket
            </h4>
            <div className="flex-grow-1 w-75 text-end">
              <button
                onClick={() => clearAllCart()}
                role="button"
                className="my-3 btn btn-danger"
              >
                Clear Basket
              </button>
            </div>
          </div>

          <div className="cart-items-wrapper position-relative">
            {cartLoading ? (
              <>
                <div className="text-center position-absolute w-100 h-100 bg-white opacity-50 z-3 d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </>
            ) : null}
            <table className="table table-bordered border-primary">
              <tbody>
                {cartData
                  ? cartData.data.products.map((productItem, index) => (
                      <tr key={productItem._id} className="align-middle">
                        <td className="align-middle col-3">
                          <div
                            className="d-flex align-items-center overflow-hidden"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              className="img-fluid"
                              src={productItem.product.imageCover}
                              alt={productItem.product.title}
                            />
                          </div>
                        </td>
                        <td className="align-middle col-9">
                          <h5>{productItem.product.title}</h5>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                              Quantity:
                              <div className="ms-4 d-flex align-items-center justify-content-between border">
                                <button
                                  onClick={() =>
                                    editCartItem(
                                      productItem.product._id,
                                      productItem.count + 1
                                    )
                                  }
                                  className="btn btn-primary btn-sm "
                                >
                                  +
                                </button>
                                <b className="mx-3">{productItem.count}</b>
                                <button
                                  onClick={() =>
                                    editCartItem(
                                      productItem.product._id,
                                      productItem.count - 1
                                    )
                                  }
                                  className="btn btn-primary btn-sm "
                                >
                                  -
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                deleteCartItem(productItem.product._id)
                              }
                              role="button"
                              className="btn"
                            >
                              <i
                                role="button"
                                className="fa-solid fa-trash text-danger "
                              ></i>
                            </button>
                          </div>
                          <p className="mt-3 mb-1">
                            Item price: {formatPrice(productItem.price)}$
                          </p>
                          <h6>
                            Total:
                            {formatPrice(productItem.count * productItem.price)}
                            $
                          </h6>
                        
                        </td>
                      </tr>
                    ))
                  : null}
                <tr className="my-3 ">
                  <td className="p-4">
                    <h5 className="m-0 ">Subtotal</h5>
                  </td>
                  <td className="p-4">
                    <h5 className="m-0 text-end">
                      {cartData?.data?.totalCartPrice} $
                    </h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link  to="/Checkout" className="btn btn-outline-success w-100 text-center btn-lg">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
