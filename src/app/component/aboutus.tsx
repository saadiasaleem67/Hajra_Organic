import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="container mt-16">
      <div className="container px-5 mx-auto ">
        {/* About us */}
        <div className="text-center">
          <h1 className="text-4xl xl:text-4xl lg:text-4xl sm:text-5xl title-font  text-gray-900 font-extrabold  ">
            About us
          </h1>

          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-mypurple inline-flex" />
          </div>
        </div>
      </div>
      {/* Paragraph about Hjra Orgainc */}
      <div className="mt-8 xl:px-28 lg:px-28">
        <p className="text-center xl:text-3xl lg:text-3xl text-xl sm:text-2xl  text-mytext ">
          Handmade Premium Organic Skincare and Haircare line started by Dr.
          Urooj Arif with a vision to introduce homemade, natural and effective
          skincare products
        </p>
      </div>
      {/* Paragraph about Dr.Urooj */}
      <div className=" container mt-9 flex xl:px-24 lg:px-28">
        <div className="text-center ">
          <p className=" font-normal text-mypink text-3xl italic ">
            About Dr. Urooj Arif
          </p>
          <p className="text-mytext text-center xl:text-3xl lg:text-3xl text-xl sm:text-2xl ">
            She completed her Pharm D Degree in 2012 from Karachi University.
            She compounded her first pain relief Balm product in 2014 with the
            support of her mother-in-law. In 2017 she launch HajraHijab, a
            premium hijab brand. In 2021 she launch Hajrah Organic, premium
            and pure organic skincare and haircare products brand.{" "}
          </p>
        </div>
      </div>
      {/* Social Media links */}
      <div className="mt-6">
        <div className="flex justify-center items-center  gap-2 ">
          <div className="flex mt-5">
            <div className="xl:w-96 lg:w-72 sm:w-40 w-12 h-0.5 rounded-full bg-zinc-300 inline-flex " />
          </div>
          <p className="text-center mt-6 xl:text-3xl lg:text-3xl sm:text-xl text-xl font-extrabold ">
            <Link
              href={"https://www.instagram.com/hajrahorganic"}
              target="_blank"
              className=" text-mypurple"
            >
              Follow us On Instagram
            </Link>
          </p>
          <div className="flex mt-5">
            <div className="xl:w-96 lg:w-72 sm:w-40 w-12 h-0.5 rounded-full bg-zinc-300 inline-flex"></div>
          </div>
        </div>
        <div className="flex justify-center items-center  gap-2 ">
          <div className="flex mt-5">
            <div className="xl:w-96 lg:w-72 sm:w-40 w-12 h-0.5 rounded-full bg-zinc-300 inline-flex " />
          </div>
          <p className="text-center mt-6 xl:text-3xl lg:text-3xl sm:text-xl text-xl font-extrabold ">
            <Link
              href={"https://www.facebook.com/hajrahorgnaic"}
              target="_blank"
              className=" text-mypurple"
            >
              Follow us On Facebook
            </Link>
          </p>
          <div className="flex mt-5">
            <div className="xl:w-96 lg:w-72 sm:w-40 w-12 h-0.5 rounded-full bg-zinc-300 inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
