import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import React from "react";

const getImage = async () => {
  const query = await client.fetch('*[_type == "mainimage"][0]');
  return query;
};
const Hero = async () => {
  const data = await getImage();
  return (
    <>
      {/* lg sm xl */}
      {/* hero image */}

      <div>
        <Image
          src={urlFor(data.heroimage).url()}
          alt="main image"
          width={1500}
          height={500}
          className="w-full"
        />
      </div>
    </>
  );
};

export default Hero;
