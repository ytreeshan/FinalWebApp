import { AddressElement } from "@stripe/react-stripe-js";
import React from "react";

const AddressForm = () => {
  return (
    <fieldset>
      <h3>Address</h3>
      <AddressElement
        options={{ mode: "shipping" }}
        onChange={(event) => {
          if (event.complete) {
            const address = event.value.address;
            console.log("Address complete:", address);
          }
        }}
      />
    </fieldset>
  );
};

export default AddressForm;
