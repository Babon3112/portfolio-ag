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
      <Link href={"/projects"}>
        <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-center cursor-pointer mt-10 mobile:mt-0 w-[23rem] mobile:w-56 mr-1">
          <div className="border-b border-zinc-300 dark:border-zinc-700 flex justify-center">
            <Image
              src="/desktop.png"
              width={180}
              height={180}
              alt=""
              className="mt-2 mb-2"
            />
          </div>
          <div className="my-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold mb-1">
              SHOWCASE
            </p>
            <h1 className="text-xl font-bold mt-1 text-zinc-900 dark:text-zinc-100">
              Projects
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home3;
