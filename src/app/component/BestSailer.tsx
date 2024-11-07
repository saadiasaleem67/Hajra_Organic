import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IProp {
  name: string;
  _id: string;
  slug: string;
  category: string;
  imageUrl: string;
  price: number;
  prevoiusprice: number;
}
const getdata = async () => {
  const query =
    await client.fetch(`*[_type == "product"][8...12] | order(_createdAt asc){
   name,
   price,
   _id,
   "slug":slug.current,
   "imageUrl":image[0].asset->url,
   prevoiusprice,
   "category":category[]->{
     name
   }
}`);
  return query;
};

const BestSailer = async () => {
  const data: IProp[] = await getdata();
  return (
    <div className="container mt-16">
      
      {/* name */}
      <div className="container px-5 mx-auto ">
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold capitalize ">
            Best Selling
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>

      {/* products */}
      <div className=" container grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 place-items-center sm:gap-10 gap-6">
        {data.map((item) => (
          <div key={item._id} className="mt-7 pb-3 rounded-lg ">
            {/* product Image */}
            <Link href={`/product/${item.slug}`}>
              <div className="  hover:border border-gray-400 duration-100">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  height={500}
                  width={400}
                />
              </div>

              <div className="mt-2">
                {/* product name */}
                <p className=" text-mytext font-bold "> {item.name}</p>
              </div>
            </Link>

            {/* price */}
            <div className="lg:flex xl:flex sm:flex gap-3 mt-1">
              <span className=" text-[#d00000] line-through  ">
                {`PKR ${item.prevoiusprice}`}
              </span>
              <p className=" text-mytext font-bold text-xl">{`PKR ${item.price}.00`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSailer;
