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
              <div className="mt-4 ">
                <Link href={"/Body-Hair"}>
                  <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4  pb-4 border-b">
                    Body-Hair
                  </p>
                </Link>
                <Link href={"/Face-Lip"}>
                  <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4 pb-4 border-b">
                    Face-Lip
                  </p>
                </Link>
                <Link href={"/Creams"}>
                  <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4 pb-4 border-b">
                    Creams
                  </p>
                </Link>
                <Link href={"/Serums"}>
                  <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4 pb-4 border-b">
                    Serums
                  </p>
                </Link>
                <Link href={"/Scrubs"}>
                  <p className="text-xl font-semibold hover:text-mypink duration-500 mt-4 pb-4 border-b">
                    Scrubs
                  </p>
                </Link>

                
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBarSheet;
