"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home4 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1850);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/"}>
        <div className="border border-gray-300 bg-white rounded-xl text-center h-full w-full mobile:w-56">
          <div className="border-b border-gray-300 flex justify-center">
            <Image
              src="/other.png"
              width={200}
              height={200}
              alt=""
              className="my-2"
            />
          </div>
          <div className="my-2">
            <p className="text-gray-500 text-xs font-semibold mb-1">
              WORKS I USED TO DO
            </p>
            <h1 className="text-xl font-bold mt-1">Other Works</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home4;
