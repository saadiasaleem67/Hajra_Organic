import React from "react";
import Image from "next/image";
import Link from "next/link";

const Links = [
  {
    name: "Body Wash",
    items: "3 Product",
    href: "/Body-Hair",
    pic: "/images/bodywash.png",
  },
  {
    name: "Crems",
    items: "3 Product",
    href: "/Creams",
    pic: "/images/creams.png",
  },
  {
    name: "lip Tint",
    items: "3 Product",
    href: "/Face-Lip",
    pic: "/images/liptinit.png",
  },
  {
    name: "Scrubs",
    items: "3 Product",
    href: "/Body-Hair",
    pic: "/images/scrubs.png",
  },
  {
    name: "Serums ",
    items: " Product",
    href: "/Serums",
    pic: "/images/serums.png",
  },
  {
    name: "Body Wash",
    items: "3 Product",
    href: "/Body-Hair",
    pic: "/images/shampo.png",
  },
];

const Category = () => {
  return (
    <div className="container mt-16">
      <div className="container px-5 mx-auto ">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold capitalize ">
            Shop By Categories
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>
      {/* images with name */}
      <div className="mt-5 grid grid-cols-2 lg:grid-col-3 xl:grid-cols-3 sm:grid-cols-3 place-items-center sm:gap-3  ">
        {Links.map((link, idx) => (
          <div key={idx}>
            <div className="mt-3">
              <Link href={link.href}>
                <div className="w-40 lg:w-64 xl:w-64">
                  <Image
                    src={link.pic}
                    alt="Body & Hair"
                    className="rounded-lg "
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className=" text-mytext font-semibold text-lg">
                    {link.name}
                  </p>
                  <p className="font-light text-gray-500">{link.items}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
