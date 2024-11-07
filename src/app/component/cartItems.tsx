import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";

const CartItems = ({ item }: any) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full border-b border-zinc-400 my-5 h-[120px] mb-2">
      <div className=" w-28 flex items-center justify-center  border mb-2 border-zinc-400">
        {/* image */}
        <Image
          src={item.image}
          alt="product image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      {/* description */}
      <div className=" ml-2">
        <h2 className="text-base font-semibold text-mytext">{item.name}</h2>
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

        {/* quantity */}
        <div className="flex  ">
          <div className="flex w-32 gap-4 items-center justify-center">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus />
            </button>
            <div>{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus />
            </button>
          </div>
        </div>

        {/* total price */}
        <div className=" mt-3 font-bold text-mytext text-end">
          {item.price * item.quantity}.00
        </div>
      </div>
    </div>
  );
};

export default CartItems;
