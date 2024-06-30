"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home7 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/about"}>
        <div className="flex flex-col w-96 border border-gray-300 rounded-2xl">
          <div className="flex justify-center">
            <Image
              src="/education.png"
              width={120}
              height={120}
              alt=""
              className="mt-2"
            />
          </div>
          <div className="w-full border-t border-gray-300 my-2">
            <p className="text-gray-500 text-xs font-semibold text-center mt-2">
              ABOUT MY EDUCATION
            </p>
            <h1 className="text-xl font-bold text-center">Academics</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home7;
