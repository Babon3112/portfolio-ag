"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work3 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <Link
          href="https://babon3112.github.io/Currency-Converter/"
          target="_blank"
        >
          <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={335}
                height={335}
                alt=""
                src="/currencyconverter.png"
                className="rounded-tr-2xl rounded-tl-2xl h-[18rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-4 mb-2 font-medium text-sm text-gray-500">
              Currency Converter
            </p>
            <h1 className="flex mb-4 font-bold">
              Currency Converter
              <GitHub />
            </h1>
          </div>
        </Link>
        <div className="text-gray-950 w-[21rem] h-10 overflow-hidden border border-gray-300 rounded-full flex items-center justify-center relative bg-white p-2 mt-8">
          <div className="marquee">
            <p>
              Thanks for visiting my portfolio. Click on the bottom arrow to
              rate my portfolio. Thank You ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work3;
