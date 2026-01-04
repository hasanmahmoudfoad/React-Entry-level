import styles from "./Home.module.css";
import CollectionSlider from "../CollectionSlider/CollectionSlider";
import { useContext } from "react";
import { storeVars } from "../../Context/global";
import { cartContext } from "../../Context/cartContext"

export default function Home() {
  const x = useContext(storeVars);
  const cartItems = useContext(cartContext);
  // console.log(x);
  console.log(cartItems);
  

  return (
    <>
      <h2 className="display-3 text-center text-success">22222</h2>
      <h2 className="display-3 text-center text-success">
      </h2>

      <CollectionSlider />
    </>
  );
}
