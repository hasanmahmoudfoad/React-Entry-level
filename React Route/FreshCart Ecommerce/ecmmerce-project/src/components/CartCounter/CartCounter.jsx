import React from "react";
import styles from "./CartCounter.module.css";

import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

export default function CartCounter() {
  const { cartData } = useContext(cartContext);
    const count = cartData?.numOfCartItems || 0;


  return (
    <>
      <div  key={count} className={styles.cartCounter}>
        {count}
      </div>
    </>
  );
}
