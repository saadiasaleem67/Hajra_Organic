import Image from "next/image";
import Hero from "./component/heroimage";
import Category from "./component/category";
import Aboutus from "./component/aboutus";
import Reviews from "./component/reviews";
import NewArrivals from "./component/NewArrivals";
import Deals from "./component/Deals";
import BestSailer from "./component/BestSailer";

export default function Home() {
  return (
    <>
      <Hero/>
      <NewArrivals/>
      <BestSailer/>
      <Deals/>
      <Category/>
      <Aboutus/>
      <Reviews/>

    </>
  );
}
