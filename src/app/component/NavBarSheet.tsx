import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import Link from "next/link";
const navLinks = [
  {
    name: "Body-Hair",
    link: "/Body-Hair",
  },
  {
    name: "Face-Lip",
    link: "Face-Lip",
  },
  {
    name: "Creams",
    link: "/Creams",
  },
  {
    name: "Serums",
    link: "/Serums",
  },
  {
    name: "Scrubs",
    link: "/Scrubs",
  },
];
const NavBarSheet = () => {
  return (
    <div> 
      <Sheet>
        <SheetTrigger>
          <RiMenuUnfold2Fill />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-2xl font-semibold text-mypink ">
              <Link href={"/"}>Hajrah Orgaric</Link>
            </SheetTitle>
            <SheetDescription>
              <div className="mt-4">
                {navLinks.map((link, idx) => (
                  <div key={idx}>
                    <Link href={link.link}>
                      <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4  pb-4 border-b">
                        {link.name}
                      </p>
                    </Link>
                    
                  </div>
                ))}
                 <div className="mt-10 xl:mt-0 lg:mt-0 sm:mt-10">
          <div className="sm:mr-9  w-full">
            <p className="text-xl text-mypink">Follow us </p>
          </div>
          <span className="inline-flex justify-center sm:justify-start mt-4">
            <Link
              className="text-gray-400 hover:text-blue-700"
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
              className="ml-3 text-gray-400 hover:text-pink-800"
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBarSheet;
