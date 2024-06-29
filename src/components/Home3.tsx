"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home3 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/works"}>
        <div className="border border-gray-300 bg-white rounded-xl text-center cursor-pointer h-full mt-10 mobile:mt-0 w-full mobile:w-56 mr-1">
          <div className="border-b border-gray-300 flex justify-center">
            <Image src="desktop.png" alt="" className="w-48 m-3 mt-1 mb-1" />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold mt-3">SHOWCASE</p>
            <h1 className="text-xl font-bold mb-3">Projects</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home3;
