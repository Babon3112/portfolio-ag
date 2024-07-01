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
        <div className="border border-gray-300 bg-white rounded-xl text-center cursor-pointer mt-10 mobile:mt-0 w-[21rem] mobile:w-56 mr-1">
          <div className="border-b border-gray-300 flex justify-center">
            <Image
              src="/desktop.jpg"
              width={180}
              height={180}
              alt=""
              className="mt-2 mb-2"
            />
          </div>
          <div className="my-2">
            <p className="text-gray-500 text-xs font-semibold mb-1">SHOWCASE</p>
            <h1 className="text-xl font-bold mt-1">Projects</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home3;
