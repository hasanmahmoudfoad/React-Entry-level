import axios from "axios";
import { createContext, useContext } from "react";
import { storeVars } from "../Context/global";

export const cartContext = createContext();

export default function CartContextProvider(props) {
  const { userToken } = useContext(storeVars);

  async function addToCart(productId) {
    return await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: productId,
      },
      {
        headers: userToken,
      }
    );
  }


  async function deleteCartItem(productId) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers: userToken }
      );
      return response; // Return the response if successful
    } catch (error) {
      console.error("Error deleting cart item:", error); // Log the error
      throw error; // Optionally rethrow the error for further handling
    }
  }


  async function getCartItems() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: userToken,
    });
  }


  async function clearAllCart() {
    return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: userToken,
    });
  }

  return (
    <cartContext.Provider
      value={{
        randomNumber: 66,
        addToCart,
        getCartItems,
        clearAllCart,
        deleteCartItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
