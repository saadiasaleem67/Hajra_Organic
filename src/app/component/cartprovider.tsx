"use client";
import { CartProvider } from "use-shopping-cart";
import React, { ReactNode } from "react";

const Cartprovider = ({ children }:{children:ReactNode}) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="sucess"
      cancelUrl="error"
      language="en-US"
      currency="PKR"
      billingAddressCollection={true}
      shouldPersist={true}
    >{children}</CartProvider>
  );
};

export default Cartprovider;
