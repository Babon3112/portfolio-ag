"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home5 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/projects"}>
        <div className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl text-center cursor-pointer h-52 w-[23rem] mobile:w-56 mt-10 mobile:mt-0">
          <div className="border-b border-gray-300 dark:border-gray-700 flex justify-center">
            <Image
              src="/skills.png"
              width={135}
              height={140}
              alt=""
              className="my-2"
            />
          </div>
          <div className="my-2">
            <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold">
              MY SKILLSETS
            </p>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Skills
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home5;
