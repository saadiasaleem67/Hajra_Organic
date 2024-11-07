"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface iAppProp {
  image: any;
}
export default function ImageGallery({ image }: iAppProp) {
  const [bigimage, setbigimgae] = useState(image[0]);
  const handleImgae = (images: any) => setbigimgae(images);
  return (
    <div className="container mt-2 ">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={urlFor(bigimage).url()}
          alt="photo"
          width={500}
          height={500}
          className=" object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-800 px-3 py-1.5 uppercase tracking-wider text-body">
          Sales
        </span>
      </div>

      <div className="order-last grid grid-cols-3 lg:grid-cols-4 sm:grid-cols-4 mt-4 gap-3 lg:gap-2 ">
        {image.map((images: any, idx: any) => (
          <div key={idx} className="rounded-lg">
            <Image
              src={urlFor(images).url()}
              width={200}
              height={200}
              alt="photo"
              onClick={() => handleImgae(images)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
