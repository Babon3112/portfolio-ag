"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/about"}>
        <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-center w-[23rem] mobile:w-56 ml-1 mt-2 mobile:mt-0">
          <div className="border-b border-zinc-300 dark:border-zinc-700 flex justify-center">
            <Image
              src="/aboutme.png"
              width={105}
              height={105}
              alt=""
              className="mb-2 mt-2"
            />
          </div>
          <div className="my-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold mb-1">
              MORE ABOUT ME
            </p>
            <h1 className="text-xl font-bold mt-1 text-zinc-900 dark:text-zinc-100">
              Credentials
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home2;
