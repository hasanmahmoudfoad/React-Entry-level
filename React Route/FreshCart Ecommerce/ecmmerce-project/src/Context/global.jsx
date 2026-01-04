import { createContext, useState } from "react";

export const storeVars = createContext(null);

export default function StoreVarsProvider(props) {
  // Retrieve userToken from local storage
  const userToken = {token:localStorage.getItem("userToken")};

  if (userToken) {
    console.log("User token retrieved:", userToken);
  } else {
    console.log("No user token found in local storage.");
  }
  return (
    <storeVars.Provider
      value={{ randomNumber: 55, username: "ذو الوجه العابس", userToken , age:23 }}
    >
      {props.children}
    </storeVars.Provider>
  );
}
