import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
interface IProp {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  prevoiusprice:number
  category: string[];
}

async function getData(category: string) {
  const query = `*[_type == "product" &&  references(*[_type=="category" && name == '${category}']._id)]{
     _id,
     name,
     price,
    "imageUrl":image[0].asset->url,    
     "slug":slug.current,
    prevoiusprice,
     "category":category[]->{
     name
}
    }`;
  const Data = await client.fetch(query);
  return Data;
}

const CetegoryPage = async ({ params }: { params: { category: string } }) => {
  const data: IProp[] = await getData(params.category);

  return (
    <div className="container">
      {/* link */}
      <div className="flex items-center justify-center gap-3">
        <Link href={"/"} className="text-mytext">
          Home
        </Link>
        <span>
          <PiGreaterThanBold />
        </span>
        <p className="text-mypink font-bold">{params.category}</p>
      </div>

      {/* name */}
      <div className="mt-3 ">
      <div className="container px-5 mx-auto ">
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold capitalize ">
         {params.category}
          </h1>

          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>
      </div>

      {/* products */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 sm:gap-10 lg:gap-10  place-items-center ">
        {data.map((item) => (
          <div key={item._id} className="container mt-7 pb-3 rounded-lg ">
            {/* product Image */}
            <Link href={`/product/${item.slug}`}>
              <div className=" hover:border border-gray-400 duration-100">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  height={400}
                  width={400}
                />
              </div>

              {/* product data */}
              <div className="mt-4">
                <p className=" text-mytext font-bold"> {item.name}</p>
              </div>
            </Link>

            {/* price */}
            
              <div className="lg:flex xl:flex sm:flex gap-3 mt-1">
                <span className=" text-[#d00000] line-through  ">
                  {`PKR ${item.prevoiusprice}`}
                </span>
                <p className=" text-mytext font-bold text-xl">{`PKR ${item.price}.00`}</p>
              </div>
          
            {/* butoon for view details */}
            {/* <Link href={`/product/${item.slug}`}>
              <button className="bg-[#fb6f92] text-center p-2 rounded-full font-medium text-xl mt-4 hover:bg-mytext duration-500 text-body w-full">
                View More Details
              </button>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CetegoryPage;
