import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";

const CartItems = ({ item }: any) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full border-b border-zinc-400 h-[120px] mt-2">
      <div className="w-32 flex items-center justify-center border border-gray-800">
        {/* image */}
        <Image
          src={item.image}
          alt="product image"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      {/* description */}
      <div className=" ml-5 w-full">
        <h2 className="text-base font-semibold text-mytext w-60">
          {item.name}
        </h2>
        <div className="flex gap-4">
          <p className="text-mypink pt-2">{item.price}.00</p>
          {/* item remove  */}
          <button
            type="button"
            className="pt-2 text-2xl"
            onClick={() => removeItem(item.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>

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

          {/* Total price */}
          <div className="font-bold text-mytext ">
            {item.price * item.quantity}.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
