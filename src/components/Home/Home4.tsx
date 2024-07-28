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
        <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-center h-52 w-[23rem] mobile:w-56">
          <div className="border-b border-zinc-300 dark:border-zinc-700 flex justify-center">
            <Image
              src="/other.png"
              width={190}
              height={200}
              alt=""
              className="my-2"
            />
          </div>
          <div className="my-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold">
              WORKS I USED TO DO
            </p>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Other Works
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home4;
