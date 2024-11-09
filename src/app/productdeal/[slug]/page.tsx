import ImageGallery from "@/app/component/imageGallery";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Addtobag from "@/app/component/addtobag";
import { urlFor } from "@/sanity/lib/image";
import { FaTruck } from "react-icons/fa6";

interface IProp {
  name: string;
  _id: string;
  slug: string;
  price: number;
  image: any;
  raiting: number;
  instock: string;
  category: string[];
  product1name: string;
  product1list: string[];
  product2name: string;
  product2list: string[];
  product3name: string;
  product3list: string[];
  prevoiusprice: number;
}
async function getData(slug: string) {
  const query = `*[_type == "deals" && slug.current == '${slug}'][0]{
    name,
    _id,
    price,
    image,     
    prevoiusprice,
    instock,
    raiting,
    product1name,
    product1list,
    product2name,
    product2list,
    product3name,
    product3list,
    "slug":slug.current,
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
      <div className="">
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1 xl:grid-cols-2 lg:gap-4">
          {/* selective image */}
          <ImageGallery image={data.image} />

          {/* product Data */}
          <div className="lg:mt-5  px-4 xl:px-0 lg:px-0 sm:px-0 sm:mt-3 ">
            <div>
              {/* product Avaibility for mobile */}
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
            </div>
            {/* product name */}
            <p className="text-zinc-900 text-3xl font-bold mb-1">{data.name}</p>

            {/* product price */}
            <div className="lg:flex  sm:flex xl:flex mt-4 justify-between ">
              <div className="flex gap-3">
                <span className="text-lg text-gray-400 line-through  font-bold ">
                  {`PKR ${data.prevoiusprice}`}
                </span>
                <p className=" text-mytext font-semibold text-2xl">{`PKR ${data.price}.00`}</p>
              </div>
              {/* product Avaibility */}
              <div className="hidden sm:flex lg:flex xl:flex">
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

            {/* product rating */}
            <div className="flex mt-3">
              <div className="flex mt-1 gap-1">
                <p className="text-mytext">{data.raiting}</p>
                {/* socail media links */}
                <span className="text-yellow-400 mt-1">
                  <FaStar />
                </span>
              </div>
              <span className="flex ml-3 pl-3 border-l-2 border-gray-300 gap-2">
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
            {/* shippping */}
            <div className="mt-2 ">
              <div className="flex text-mytext mt-2 text-lg gap-2">
                <FaTruck />
                <p className=" text-sm text-start text-mytext">
                  2-4 Days Shipping
                </p>
              </div>

              <p className="mt-2 text-sm text-start text-[#d00000] font-semibold">
                Shipping Charges on Actual
              </p>
            </div>

            {/* Deals name */}
            <div className="mt-2">
              <p className="text-xl text-mytext font-semibold">
                Bundle Includes
              </p>
              <div className="mt-2 ml-7">
                <p className="  text-zinc-800">{data.product1name}</p>
                <p className="mt-2  text-zinc-800">{data.product2name}</p>
                <p className="mt-2  text-zinc-800">{data.product3name}</p>
              </div>
            </div>

            {/* addto bag button */}
            <div className=" flex gap-3 mt-5">
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
        {/* Decrpitions */}
        <div className="mt-10">
          <p className="mt-3 lg:ml-10 text-3xl text-zinc-900 font-semibold">
            Description
          </p>
          <div className="mt-6">
            <p className=" text-lg text-mypurple lg:ml-14 font-bold">
              {data.product1name}
            </p>
            {data.product1list.map((item, index) => (
              <div key={index} className="lg:ml-20 mt-2 ml-6 sm:ml-6 ">
                <ul>
                  <li className="list-disc text-zinc-800">{item}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className=" text-lg text-mypurple lg:ml-14 font-bold">
              {data.product2name}
            </p>
            {data.product2list.map((item, index) => (
              <div key={index} className="lg:ml-20 mt-2 ml-6 sm:ml-6">
                <ul>
                  <li className="list-disc text-zinc-800">{item}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className=" text-lg text-mypurple lg:ml-14 font-bold">
              {data.product3name}
            </p>
            {data.product3list?.map((item, index) => (
              <div key={index} className="lg:ml-20 mt-2 ml-6 sm:ml-6">
                <ul>
                  <li className="list-disc text-zinc-800">{item}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
