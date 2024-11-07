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
            <SheetTitle className="text-4xl font-semibold text-mypink">
              <Link href={"/"}>Hajrah's Orgaric</Link>
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
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBarSheet;
