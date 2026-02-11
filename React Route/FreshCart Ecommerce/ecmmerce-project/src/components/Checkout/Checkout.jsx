import React from "react";
import styles from "./Checkout.module.css";
import { useFormik } from "formik";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { Helmet } from "react-helmet";

export default function Checkout() {
  const { onlinePayment } = useContext(cartContext);

  async function handleCheckoutOrder(values) {
    console.log("Ordered....");
    console.log(values);
    const userCartID = localStorage.getItem("userCartID");
    let onlinePaymentResp = await onlinePayment(userCartID, values);
    console.log(onlinePaymentResp);
  }

  const checkoutForm = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handleCheckoutOrder,
  });

  return <>
    <Helmet>
      <title>Checkout</title>
    </Helmet>
    <div className={styles.backgroundSubtle}>
      <div className={`${styles.glassContainer} mt-5`}>
        <form onSubmit={checkoutForm.handleSubmit}>
          <h2 className="text-center mb-4 fw-bold">Checkout [100% Secure]</h2>

          <div className="mb-4">
            <label
              htmlFor="details"
              className={`${styles.glassLabel} form-label`}
            >
              Shipping Address Details
            </label>
            <input
              type="text"
              className={`${styles.glassInput} form-control`}
              name="details"
              id="details"
              placeholder="Street, Building, Apartment"
              onChange={checkoutForm.handleChange}
              onBlur={checkoutForm.handleBlur}
              value={checkoutForm.values.details}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className={`${styles.glassLabel} form-label`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              className={`${styles.glassInput} form-control`}
              id="phone"
              name="phone"
              placeholder="01XXXXXXXXX"
              onChange={checkoutForm.handleChange}
              onBlur={checkoutForm.handleBlur}
              value={checkoutForm.values.phone}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className={`${styles.glassLabel} form-label`}>
              City
            </label>
            <input
              type="text"
              className={`${styles.glassInput} form-control`}
              id="city"
              name="city"
              placeholder="Your City"
              onChange={checkoutForm.handleChange}
              onBlur={checkoutForm.handleBlur}
              value={checkoutForm.values.city}
            />
          </div>

          <button type="submit" className={`${styles.glassButton} btn btn-lg`}>
            Complete Payment
          </button>
        </form>
      </div>
    </div>
    </>
 
}
