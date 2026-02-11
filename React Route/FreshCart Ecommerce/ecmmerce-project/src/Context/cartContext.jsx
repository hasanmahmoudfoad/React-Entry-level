import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { storeVars } from "../Context/global";

export const cartContext = createContext();

export default function CartContextProvider(props) {
  const { userToken } = useContext(storeVars);
  const [cartData, setcartData] = useState();
  const [cartLoading, setcartLoading] = useState(false);

  const getCartItems = async () => {
    setcartLoading(true);
    const getResponse = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { headers: userToken }
    );
    setcartData(getResponse.data);
    console.log("getCartItems Called", getResponse.data);
    localStorage.setItem("userCartID", getResponse.data.cartId);
    setcartLoading(false);
    return getResponse;
  };

  const addToCart = async (productId) => {
    setcartLoading(true);

    const addResponse = await toast.promise(
      axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers: userToken }
      ),
      {
        loading: "Adding item...",
        success: (data) => data.data.message,
        error: (err) => err.response?.data?.message || "Error adding item",
      }
    );
    setcartData(addResponse.data);
    console.log("addToCart Called", addResponse.data);
    setcartLoading(false);

    return addResponse;
  };

  const deleteCartItem = async (productId) => {
    setcartLoading(true);

    const deleteResponse = await toast.promise(
      axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: userToken,
      }),
      {
        loading: "Deleting...",
        success: `Deleted`,
        error: "Error while deleting item",
      }
    );
    setcartData(deleteResponse.data);
    console.log("deleteResponse Called", deleteResponse.data);
    setcartLoading(false);
    return deleteResponse;
  };

  const editCartItem = async (productId, qty) => {
    setcartLoading(true);

    const editResponse = await toast.promise(
      axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count: qty },
        { headers: userToken }
      ),
      {
        loading: "Updating item...",
        success: "Item updated successfully!",
        error: "Failed to update item",
      }
    );

    setcartData(editResponse.data);
    setcartLoading(false);
    return editResponse;
  };

  const clearAllCart = async () => {
    setcartLoading(true);

    const clearResponse = await toast.promise(
      axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: userToken,
      }),
      {
        loading: "Removing Items...",
        success: "Cart cleared successfully!",
        error: "Failed",
      }
    );
    setcartData(null);
    console.log("clearResponse Called", clearResponse.data);
    setcartLoading(false);
    return clearResponse;
  };

  const onlinePayment = async (cartID, shippingAddress) => {
    const checkoutResponse = await toast.promise(
      axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:3000`,
        { shippingAddress: shippingAddress },
        { headers: userToken }
      ),
      {
        loading: "Loading Payment...",
        success: ("Redirecting..."),
        error: (err) =>
          err.response?.data?.message || "Error while loading payment",
      }
    );

    console.log("checkoutResponse Called");
    window.location.href = checkoutResponse?.data?.session.url;
    return checkoutResponse;
  };

  return (
    <cartContext.Provider
      value={{
        addToCart,
        getCartItems,
        clearAllCart,
        deleteCartItem,
        editCartItem,
        cartData,
        setcartData,
        cartLoading,
        onlinePayment,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
