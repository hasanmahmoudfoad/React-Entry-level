import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartCounter from "../CartCounter/CartCounter";

export default function Navbar({ userData, userToken }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userToken");
    navigate("/Login");
    window.reload();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                <li className="nav-item">
                  <Link className="nav-link" to="Shopify">
                    Shopify
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
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                  className="fa-solid fa-cart-shopping mx-2 text-success position-relative"
                  role="button"
                ><CartCounter/></i>
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

      
    </>
  );
}
