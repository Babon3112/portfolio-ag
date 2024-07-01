"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <Link href="https://github.com/Babon3112/EazyBuy" target="_blank">
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
              <svg
                width="20px"
                height="20px"
                className="cf-icon-svg"
                viewBox="-2.5 0 19 19"
              >
                <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
              </svg>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work1;
