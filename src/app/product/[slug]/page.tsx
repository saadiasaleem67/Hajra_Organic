import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ImageGallery from "@/app/component/imageGallery";
import Addtobag from "@/app/component/addtobag";
import Link from "next/link";
import { FaTruck } from "react-icons/fa6";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

interface IProp {
  name: string;
  _id: string;
  slug: string;
  category: string[];
  image: any;
  price: number;
  prevoiusprice: number;
  raiting: number;
  productdescription: string;
  list: string[];
  instock: string;
}

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]{
    name,
    price,
    _id,
    "slug":slug.current ,
    image,     
    prevoiusprice,
    instock,
    raiting,
    productdescription,
    list[],
    "category":category[]->{
      name
    }
  }`;
  const Data = await client.fetch(query);
  return Data;
}

interface Iprops {
  params: {
    slug: string;
  };
}
const outofstock = "Out of Stock";

const main = async ({ params }: Iprops) => {
  const data: IProp = await getData(params.slug);

  return (
    <div className="container mt-2">
      {/* link */}
      <div className="flex mt-2 items-center justify-center gap-3">
        <Link href={"/"} className="text-mytext">
          Home
        </Link>
        <span>
          <PiGreaterThanBold />
        </span>
        <p className="text-mypink">{data.name}</p>
      </div>

      {/* Side image */}
      <div className="max-w-screen-xl px-8">
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1 xl:grid-cols-2">
          {/* selective image */}
          <ImageGallery image={data.image} />

          {/* product Avaibility for mobile*/}
          <div className="container lg:mt-5">
            <div className="xl:hidden lg:hidden sm:hidden flex justify-end ">
              {data.instock === outofstock ? (
                <div className=" bg-red-500 rounded-full  p-2 ">
                  <p className="text-lg font-semibold text-body">
                    {" "}
                    {data.instock}
                  </p>
                </div>
              ) : (
                <div className=" bg-green-500 rounded-full p-2 ">
                  <p className="text-lg font-semibold text-body">
                    {" "}
                    {data.instock}
                  </p>
                </div>
              )}
            </div>
            {/* Product name */}
            <p className="text-zinc-900 text-3xl mb-1 font-bold">{data.name}</p>
            <div className="flex mt-4 justify-between">
              {/* price */}
              <div className="flex gap-3">
                <span className="text-lg text-gray-400 line-through font-bold">
                  {`PKR ${data.prevoiusprice}`}
                </span>
                <p className="text-mytext font-semibold text-2xl">
                  {`PKR ${data.price}.00`}
                </p>
              </div>
              {/*  product Avaibility*/}
              <div className="hidden sm:flex lg:flex xl:flex ">
                {data.instock === outofstock ? (
                  <div className=" bg-red-500 rounded-full mr-9  p-2 ">
                    <p className="text-lg font-semibold text-body">
                      {" "}
                      {data.instock}
                    </p>
                  </div>
                ) : (
                  <div className=" bg-green-500 rounded-full mr-9  p-2 ">
                    <p className="text-lg font-semibold text-body">
                      {" "}
                      {data.instock}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <p className=" text-sm text-start text-mytext ">
              Taxes are included.
            </p>
            {/* raiting */}
            <div className="flex mt-3">
              <div className="flex gap-1">
                <p className="text-mytext">{data.raiting}</p>
                {/* socail media links */}
                <span className="text-yellow-400 mt-1">
                  <FaStar />
                </span>
              </div>
              <span className="flex ml-3 pl-3  border-l-2 border-gray-300 gap-2">
                <Link
                  href={"https://www.facebook.com/hajrahorgnaic"}
                  target="_blank"
                  className="text-gray-500 pt-1 text-lg"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={"https://www.instagram.com/hajrahorganic"}
                  target="_blank"
                  className="text-gray-500 font-bold pt-1 text-lg"
                >
                  <GrInstagram />
                </Link>
              </span>
            </div>
            {/*shipping  */}
            <div className="mt-2">
              <div className="flex text-mytext mt-2 text-lg gap-2">
                <FaTruck />
                <p className="text-sm text-start text-mytext">
                  2-4 Days Shipping
                </p>
              </div>
              <p className="mt-2 text-sm text-start text-[#d00000] font-semibold">
                Shipping Charges on Actual
              </p>
            </div>

            {/* data description */}

            <div className="mt-2">
              <p className="text-xl text-mytext font-semibold">Benefits</p>
              {data.list.map((item, index) => (
                <div key={index} className="ml-12">
                  <ul className="">
                    <li className="list-disc text-mytext ">{item}</li>
                  </ul>
                </div>
              ))}
              <p className="mt-3 text-xl text-mytext font-semibold">
                Ingredients
              </p>
              <p className="text-mytext ml-3 mt-2">{data.productdescription}</p>
            </div>
            <div className="flex gap-3 mt-5">
              <Addtobag
                currency="PRK"
                image={urlFor(data.image[0]).url()}
                name={data.name}
                price={data.price}
                id={data._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
