import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";

const CartItems = ({ item }: any) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex py-2 ">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
        {/* image */}{" "}
        <Image src={item.image} alt="product image" width={100} height={100} />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className=" text-base font-medium text-mytext">
            <h3>{item.name}</h3>
            <div className="flex gap-4 mt-1">
              <p className="text-mypink ">{item.price}.00</p>
              {/* item remove  */}
              <button
                type="button"
                className=" text-2xl"
                onClick={() => removeItem(item.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className=" flex justify-between ">
              {/* quantity */}
              <div className="flex gap-3">
                <button onClick={() => decrementItem(item.id)}>
                  <FaMinus />
                </button>
                <div className="font-semibold">{item.quantity}</div>
                <button onClick={() => incrementItem(item.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="font-bold text-mytext ">
              {item.price * item.quantity}.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
