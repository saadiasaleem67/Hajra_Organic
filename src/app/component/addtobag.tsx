"use client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  price: number;
  currency: string;
  image: any;
  id: string;
}

const Addtobag = ({ name, price, currency, image, id }: ProductCart) => {

  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: id,
  };
  return (
    <button
      className="bg-pink-900 text-center p-2  font-medium text-xl hover:bg-mytext duration-500 text-body w-full"
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </button>
  );
};

export default Addtobag;
