"use client";
import CartItems from "./cartItems";

import { BsCartX } from "react-icons/bs";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

import { ScrollArea } from "@/components/ui/scroll-area";
import CheckOut from "./CheckOut";

const Cartsidebar = () => {
  const {
    cartCount,
    shouldDisplayCart,
    cartDetails,
    totalPrice,
  } = useShoppingCart();
  return (
    <div>
      <Sheet open={shouldDisplayCart}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-3xl">
              My Shopping Cart ({cartCount}){" "}
            </SheetTitle>
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
          <div className="border-t border-gray-400 ox-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-mytext">
              <p className="text-2xl">Subtotal</p>
              <p className="text-3xl">PKR {totalPrice}.00</p>
            </div>
            <p className="mt-0.5 text-sm text-start text-gray-500">
              Taxes and shipping fee will be calculated at checkout
            </p>
            <div className="mt-6">
              {/* <button className="w-full text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 duration-500 rounded"> */}
                
                <CheckOut/>
              {/* </button> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cartsidebar;

// first cartsidebar
{
  /* <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-3xl">Shopping Cart ( {cartCount} )</SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1">
              <ul className="-my-6 divide-y divide-gray-500">
                {cartCount === 0 ? (
                  <h1 className=" text-xl py-2 mt-5">
                    <div className=" mt-20 ">
                      <div className=" text-9xl  text-gray-600 pl-40">
                        <BsCartX />
                      </div>
                      <p className="text-center mt-4 text-base">
                        No product in this Cart
                      </p>
                    </div>
                  </h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="flex py-6">
                        <div className="h-24 w-24  rounded-md border border-gray-500">
                          <Image
                            src={entry.image as string}
                            alt="product image"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="text-base font-semibold text-mytext">
                              <h3>{entry.name}</h3>
                              <div className="flex gap-4">
                                <p className="text-mypink pt-2">
                                  PKR {entry.price}
                                 </p>
                                <button
                                  type="button"
                                  className="pt-2 text-2xl"
                                  onClick={() => removeItem(entry.id)}
                                >
                                  <MdDelete />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                    
                  
                  </>
                )}
              </ul>
            </div>
            <div className="border-t border-gray-400 ox-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-mytext">
                <p className="text-2xl">Subtotal</p>
                <p className="text-2xl">PKR {totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-start text-gray-500">Taxes and shipping fee will be calculated at checkout</p>
              <div className="mt-6">
                <button className="w-full text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 duration-500 rounded" > Checkout</button>
              </div>
            </div>
          </div>
        </SheetContent> */
}

// seconf cartsidebar latest
{
  /* <Sheet open={shouldDisplayCart}>
       
        <SheetTrigger></SheetTrigger>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-3xl">
              My Shopping Cart ({cartCount}){" "}
            </SheetTitle>
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
              <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItems item={item} key={key} />;
                  })}
              </ScrollArea>
            )}
          </>
          <div className="border-t border-gray-400 ox-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-mytext">
              <p className="text-2xl">Subtotal</p>
              <p className="text-2xl">PKR {totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-start text-gray-500">
              Taxes and shipping fee will be calculated at checkout
            </p>
            <div className="mt-6">
              <button className="w-full text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 duration-500 rounded">
                {" "}
                Checkout
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet> */
}
