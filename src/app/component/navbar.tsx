"use client";
import React from "react";
import Image from "next/image";
import logo2 from "/public/images/logo-removebg-preview.png";
import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import Cartsidebar from "./cartsidebar";
import { useShoppingCart } from "use-shopping-cart";
import NavBarSheet from "./NavBarSheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  const Links = [
    {
      name: "Body-Hair",
      path: "/Body-Hair",
    },
    {
      name: "Face-Lip",
      path: "/Face-Lip",
    },

    {
      name: "Scrubs",
      path: "/Scrubs",
    },
    {
      name: "Serums",
      path: "/Serums",
    },
    {
      name: "Creams",
      path: "/Creams",
    },
  ];
  const pathname = usePathname();

  return (
    //
    <div>
      {/*upper message */}
      {/* <div className="bg-gray-900">
        <p className="text-gray-50 font-medium text-center p-2">
          Delivery charges Rs.200. Delivery time for Karachi 4-5 working days,
          Outside Karachi 5-10 working days. Except Weekends and Public Holidays
        </p>
      </div> */}

      {/*  Main Header */}
      <div className="container md:flex xl:items-center xl:justify-between flex items-center justify-between lg:items-center lg:justify-between sm:items-center sm:justify-between">
        {/* sheet for mobile and tablets*/}
        <div className="text-4xl text-mytext lg:hidden">
          <NavBarSheet />
        </div>

        {/* logo */}
        <div className="ml-10 lg:ml-0 xl:ml-0 sm:ml-32">
          <Link href={"/"}>
            <Image src={logo2} alt="main logo" width={200} height={100} />
          </Link>
        </div>

        {/* Links  */}
        <nav className="hidden gap-12 lg:flex ">
          {Links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.path ? (
                <Link
                  className="text-lg font-bold text-mypink "
                  href={link.path}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-mytext transition duration-500 hover:text-mypink "
                  href={link.path}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* contact*/}
        <div className="flex gap-7 text-[30px] px-3">
          <div className="hover:cursor-pointer  ">
            <VscAccount className="h-12 w-8" />
          </div>

          {/* shoping cart */}
          <div
            className="hover:cursor-pointer relative"
            onClick={() => handleCartClick()}
          >
            <LiaShoppingBagSolid className="h-12 w-8" />
            <div className="bg-red-700 text-body w-[20px] h-[20px] absolute text-sm text-center rounded-full top-2 -left-1">
              {cartCount}
            </div>
            <Cartsidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
