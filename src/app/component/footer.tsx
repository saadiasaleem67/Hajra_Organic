import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font ">
      {/* Offical Hajra Organic  website link */}
      <div className="w-full h-10 mt-6 text-center bg-gray-950 text-body hover:underline pt-1">
        <Link href={"https://hajrahorganic.com/"} target="_blank">
          Visit Official Hajrah Organic Website
        </Link>
      </div>
      {/* First Portion */}
      <div className=" container lg:flex gap-x-40  py-8">
        <div className="w-64 flex-shrink-0 md:mx-0  md:text-left ">
          <Link
            href={"/"}
            className="flex title-font font-medium  md:justify-start  text-white"
          >
            <p className="ml-3 text-2xl">Hajrah Organic</p>
          </Link>
          <p className="mt-2 ml-3 text-sm text-gray-400">
            Handmade Premium Organic Skincare and Haircare line started by Dr.
            Urooj Arif with a vision to introduce homemade, natural and
            effective skincare products.
          </p>
        </div>
        {/* Second Portion */}
        <div className=" mt-10 lg:mt-0">
          <div className="flex gap-4">
            <div className="mt01">
              <IoLocationOutline className="text-3xl" />
            </div>
            <div>
              <p>University Road, Karachi Pakistan</p>
            </div>
          </div>
          <div className="flex mt-5 gap-4">
            <div className="mt-1">
              <IoIosPhonePortrait className="text-3xl" />
            </div>
            <div>
              <p>+923343772380</p>
            </div>
          </div>
          <div className="flex mt-5 gap-4">
            <div className="mt-1">
              <MdOutlineMailOutline className="text-3xl" />
            </div>
            <div>
              <p>hello@hajrahorganic.com</p>
            </div>
          </div>
        </div>
        {/* Third last Portion */}
        <div className="mt-10 xl:mt-0 lg:mt-0 sm:mt-10">
          <div className="sm:mr-9  w-full">
            <p className="">Follow us </p>
          </div>
          <span className="inline-flex justify-center sm:justify-start mt-4">
            <Link
              className="text-gray-400"
              href={"https://www.facebook.com/hajrahorgnaic"}
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>

            <Link
              className="ml-3 text-gray-400 "
              href={"https://www.instagram.com/hajrahorganic"}
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
          </span>
        </div>
      </div>

      {/*very last portion*/}
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Hajrah Organic — by
            <Link
              href={"https://www.linkedin.com/in/saadia-saleem-683878293/"}
              className="text-gray-200 ml-1"
              target="_blank"
            >
              Saadia Saleem
            </Link>
            <span>. All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
