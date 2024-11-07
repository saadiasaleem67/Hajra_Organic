import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Idata {
  name: string;
  _id: string;
  slug: string;
  category: string[];
  imageUrl: string;
  username: string;
  userreview: string;
}
const getdata = async () => {
  const query =
    await client.fetch(`*[_type == "product"][14...19] | order(_createdAt asc){
   name,
   _id,
   "slug":slug.current,
   "imageUrl":image[0].asset->url,
   username,
   userreview,
   "category":category[]->{
     name
   }
}`);
  return query;
};

const Reviews = async () => {
  const data: Idata[] = await getdata();
  return (
    <div className="container lg:mt-16 sm:mt-16 mt-16">
      <div className="container px-5 mx-auto ">
        {/* heading */}
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold capitalize ">
            Reviews
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>
      {/* Review details */}
      <div className="container grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2  sm:gap-5 gap-6 ">
        {data.map((item) => (
          <div key={item._id} className="mt-7 pb-3 rounded-lg">
            <div className="  w-auto border border-gray-500 p-2">
              <p className="font-semibold text-base text-start">
                {item.username}
              </p>
              <div className="flex text-[#E246CE] gap-1 mt-1">
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
              </div>

              <p className="text-mytext mt-2">{item.userreview}</p>
              <Link href={`/product/${item.slug}`}>
                <div className="flex mt-2 gap-2 border-t-2 pt-2">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      height={90}
                      width={90}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-mypurple hover:text-mytext font-medium text-start">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
