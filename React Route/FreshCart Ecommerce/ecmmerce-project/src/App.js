import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Collections from "./components/Collections/Collections";
import Brands from "./components/Brands/Brands";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import RegisterYup from "./components/RegisterYup/RegisterYup";
import Checkout from "./components/Checkout/Checkout";
import Shopify from "./components/Shopify/Shopify";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Offline, Online } from "react-detect-offline";

import { useContext } from "react";

import { storeVars } from "./Context/global";
import { cartContext } from "./Context/cartContext";

import StoreVarsProvider from "./Context/global";
import CartContextProvider from "./Context/cartContext";

function App() {
  const [userData, setuserData] = useState(null);
  const [userToken, setuserToken] = useState(localStorage.getItem("userToken"));

  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken"); //encrepted token
    let decodedToken = jwtDecode(encodedToken); //decrepted token
    setuserData(decodedToken); //store user data in state
  }

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} userToken={userToken} />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "Collections",
          element: (
            <ProtectedRoute>
              <Collections />
            </ProtectedRoute>
          ),
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "Brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "Products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "Shopify",
          element: (
            <ProtectedRoute>
              <Shopify />
            </ProtectedRoute>
          ),
        },
        {
          path: "ProductDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        { path: "RegisterYup", element: <RegisterYup /> },
        { path: "Register", element: <Register /> },
        { path: "Login", element: <Login saveUserData={saveUserData} /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <StoreVarsProvider>
      <CartContextProvider>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
        <Offline>You are offline</Offline>
      </CartContextProvider>
    </StoreVarsProvider>
  );
}

export default App;
