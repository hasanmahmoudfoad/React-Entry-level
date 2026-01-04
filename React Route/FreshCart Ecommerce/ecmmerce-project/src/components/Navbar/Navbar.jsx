import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/cartContext";

export default function Navbar({ userData, userToken }) {
  const navigate = useNavigate();
  const { getCartItems } = useContext(cartContext);
  const { clearAllCart } = useContext(cartContext);
  const { deleteCartItem } = useContext(cartContext);
  const [cartData, setCartData] = useState();

  function handleLogout() {
    localStorage.removeItem("userToken");
    navigate("/Login");
    window.location.reload();
  }

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    let cartResp = await getCartItems();
    setCartData(cartResp.data);
    console.log(cartData);
  }

  async function clearCart() {
    let clearCart = await clearAllCart();
    console.log(clearCart);
    await getCart(); // Directly call getCart after clearing
  }

  async function removeCartItem(productId) {
    let clearCartItem = await deleteCartItem(productId);
    console.log(clearCartItem);
    await getCart(); // Directly call getCart after clearing
  }

  return (
    <>
      <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
            </li>
            {/* {console.log(`navbar userData`, userData)}  {console.log(`navbar userToken`, userToken)} */}
            {userData || userToken !== null ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Brands">
                    Brands
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Collections">
                    Collections
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">
                    About
                  </Link>
                </li>
              </>
            ) : null}
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item my-auto">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-tiktok"></i>
                <i className="fab mx-2 fa-x"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i
                  onClick={() => getCart()}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                  className="fa-solid fa-cart-shopping mx-2 text-success position-relative"
                  role="button"
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "85%",
                      right: "-10px",
                      fontSize: "10px",
                      background: "rgb(25, 135, 84)",
                      color: "rgb(255, 255, 255)",
                      width: "25px",
                      height: "26px",
                      display: "flex",
                      borderRadius: "50%",
                      textAlign: "center",
                      margin: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartData ? <>{cartData.numOfCartItems}</> : ""}
                  </span>
                </i>
              </li>
              {userData || userToken === null ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="RegisterYup">
                      RegisterYup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

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
        <div className="offcanvas-body">
          <h4 className="mb-5">
            {cartData ? (
              <span className="text-success">{cartData.numOfCartItems} </span>
            ) : (
              <span className="text-success">No </span>
            )}
            items in your basket
          </h4>
          <div className="cart-items-wrapper">
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
                            <p>
                              Quantity: <b>{productItem.count}</b>
                            </p>
                            <button
                              onClick={() =>
                                removeCartItem(productItem.product._id)
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
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
          <div className="w-100 text-end">
            <button
              onClick={() => clearCart()}
              role="button"
              className="my-3 btn btn-danger"
            >
              Clear Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
