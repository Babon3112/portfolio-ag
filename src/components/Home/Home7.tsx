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
        <div className="flex flex-col w-[23rem] border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-2xl h-52">
          <div className="flex justify-center">
            <Image
              src="/education.png"
              width={120}
              height={120}
              alt=""
              className="mt-2"
            />
          </div>
          <div className="w-full border-t border-gray-300 dark:border-gray-700 my-2">
            <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold text-center mt-2">
              ABOUT MY EDUCATION
            </p>
            <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">
              Academics
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home7;
