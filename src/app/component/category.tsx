import React from "react";
import Image from "next/image";

import pic1 from "/public/images/bodywash.png";
import pic2 from "/public/images/creams.png";
import pics2 from "/public/images/liptinit.png";
import pic4 from "/public/images/scrubs.png";
import pic5 from "/public/images/serums.png";
import pic6 from "/public/images/shampo.png";
import Link from "next/link";

const Category = () => {
  return (
    <div className="container mt-16">
      <div className="container px-5 mx-auto ">
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold capitalize ">
            Shop By Categories
          </h1>

          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 lg:grid-col-3 xl:grid-cols-3 sm:grid-cols-3 place-items-center sm:gap-3  ">
        <div className="mt-3">
          <Link href={"/Body-Hair"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pic1} alt="Body & Hair" className="rounded-lg" />
            </div>
            <div className="mt-2 text-center">
              <p className=" text-mytext font-semibold text-lg">Body Wash</p>
              <p className="font-light text-gray-500">3 Products</p>
            </div>
          </Link>
        </div>

        {/* B */}
        <div className="mt-3">
          <Link href={"/Creams"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pic2} alt="Creams" className="rounded-lg" />
            </div>
            <div className="text-center mt-2">
              <p className=" text-mytext font-semibold text-lg">Creams</p>
              <p className="font-light text-gray-500">3 Products</p>
            </div>
          </Link>
        </div>

        {/* c */}
        <div className="mt-3">
          <Link href={"/Face-Lip"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pics2} alt="liptinit" className="rounded-lg" />
            </div>
            <div className="mt-2 text-center">
              <p className=" text-mytext font-semibold text-lg">Lip Tint</p>
              <p className="font-light text-gray-500">3 Products</p>
            </div>
          </Link>
        </div>

        {/* D */}

        <div className="mt-3">
          <Link href={"/Scrubs"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pic4} alt="Scrubs" className="rounded-lg" />
            </div>
            <div className="mt-2 text-center">
              <p className=" text-mytext font-semibold text-lg">Scrubs</p>
              <p className="font-light text-gray-500">3 Products</p>
            </div>
          </Link>
        </div>

        {/* E*/}
        <div className="mt-3">
          <Link href={"/Serums"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pic5} alt="serums" className="rounded-lg" />
            </div>
            <div className="mt-2 text-center">
              <p className=" text-mytext font-semibold text-lg">Serums</p>
              <p className="font-light text-gray-500">2 Products</p>
            </div>
          </Link>
        </div>

        {/* F */}
        <div className="mt-3">
          <Link href={"/Body-Hair"}>
            <div className="w-40 lg:w-64 xl:w-64">
              <Image src={pic6} alt="shampo" className="rounded-lg" />
            </div>
            <div className="mt-2 text-center">
              <p className=" text-mytext font-semibold text-lg">Shampoo</p>
              <p className="font-light text-gray-500">3 Products</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
