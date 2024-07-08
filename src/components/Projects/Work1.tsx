"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work1 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <div className="border border-gray-300 rounded-2xl bg-white h-24 w-[21rem] flex justify-center items-center">
          <Link
            href="https://github.com/Babon3112?tab=repositories"
            target="_blank"
          >
            <h1 className="text-center text-xl font-semibold tracking-wider hover:tracking-widest transition-all duration-500">
              | ALL PROJECTS |
            </h1>
          </Link>
        </div>
        <Link href="https://eazybuy-ag.vercel.app/" target="_blank">
          <div className="bg-white mt-8 w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-auto">
            <div className="w-full overflow-hidden">
              <Image
                src="/eazybuy.png"
                alt=""
                width={335}
                height={335}
                className="rounded-tr-2xl rounded-tl-2xl h-[13.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-5 mb-3 font-medium text-sm text-gray-500">
              E-Commerce Platform
            </p>
            <h1 className="flex mb-5 font-bold">
              EAZYBUY
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work1;
