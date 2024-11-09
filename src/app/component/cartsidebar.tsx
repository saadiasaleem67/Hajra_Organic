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
  const {
    cartCount,
    shouldDisplayCart,
    cartDetails,
    totalPrice,
    handleCartClick,
  } = useShoppingCart();
  return (
    <div>
      {/* Sheet */}
      <Sheet open={shouldDisplayCart}>
        <SheetContent className="sm:max-w-lg w-[90vw] ">
          <SheetHeader>
            <SheetTitle className="lg:text-3xl xl:text-3xl text-xl">
              <p>My Shopping Cart ({cartCount}) </p>
            </SheetTitle>
            <p>All price are in PKR</p>
          </SheetHeader>
          <>
            {cartCount === 0 ? (
              <h1 className=" text-xl h-2/5">
                <div className="">
                  <div className="text-9xl text-gray-600 flex items-center justify-center pt-5">
                    <BsCartX />
                  </div>
                  <p className="text-center mt-4 text-base">
                    No product in this Cart
                  </p>
                </div>
              </h1>
            ) : (
              <ScrollArea className="h-[60vh] xl:h-[65vh] mb-4 pr-3">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItems item={item} key={key} />;
                  })}
              </ScrollArea>
            )}
          </>

          {/* bottom portion */}
          <div className="border-t border-gray-400 sm:px-6 sticky bottom-0 pt-3">
            <div className="flex justify-between text-base font-medium text-mytext  ">
              <p className="text-2xl">Subtotal</p>
              <p className="text-3xl">{totalPrice}.00</p>
            </div>
            <p className="mt-0.5 text-sm text-start text-gray-500">
              Shipping Charges on Actual
            </p>
            <button className="bg-pink-900 text-center p-2  font-medium text-xl duration-500 text-body w-full mt-2">
          Check Out
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cartsidebar;
