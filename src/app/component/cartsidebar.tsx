"use client";
import CartItems from "./cartItems";
import { BsCartX } from "react-icons/bs";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Cartsidebar = () => {
  const { cartCount, shouldDisplayCart, cartDetails, totalPrice , handleCartClick } =
    useShoppingCart();
  return (
    <div>
      {/* Sheet */}
      <Sheet open={shouldDisplayCart} >
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-3xl">
              <p>My Shopping Cart ({cartCount}) </p>
            </SheetTitle>
            <p>All price are in PKR</p>
          </SheetHeader>
          <>
            {cartCount === 0 ? (
              <h1 className=" text-xl py-2 mt-5">
                <div className=" mt-20 ">
                  <div className=" text-9xl  text-gray-600 pl-36">
                    <BsCartX />
                  </div>
                  <p className="text-center mt-4 text-base">
                    No product in this Cart
                  </p>
                </div>
              </h1>
            ) : (
              <ScrollArea className="h-[60vh] xl:h-[60vh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItems item={item} key={key} />;
                  })}
              </ScrollArea>
            )}
          </>
          {/* bottom portion */}
          <div className="border-t border-gray-400 ox-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-mytext">
              <p className="text-2xl">Subtotal</p>
              <p className="text-3xl">{totalPrice}.00</p>
            </div>
            <p className="mt-0.5 text-sm text-start text-gray-500">
              Shipping Charges on Actual
            </p>
            <div className="mt-6">
              <button className="w-full text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 duration-500 rounded">
                Checkout
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cartsidebar;
