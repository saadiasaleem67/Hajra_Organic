import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import { ImWhatsapp } from "react-icons/im";
import Cartprovider from "./component/cartprovider";
import Link from "next/link";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hajra Organic",
  description: "Generated by Saadia Saleem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body `}>
        <Cartprovider>
          <Navbar />
          <div className="bg-green-500  w-16 h-16 rounded-full fixed bottom-7 right-14 flex items-center justify-center ">
            <Link href={"/"}>
              <div className="text-3xl text-white">
                <ImWhatsapp />
              </div>
            </Link>
          </div>
          {children}
          <Footer />
        </Cartprovider>
      </body>
    </html>
  );
}
