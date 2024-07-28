"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work4 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="tablet:ml-0 mobile:ml-8 max-mobile:mt-8">
        <Link href="https://babon3112.github.io/Game-of-Life/" target="_blank">
          <div className="bg-zinc-50 dark:bg-zinc-800 w-[23rem] rounded-2xl flex flex-col items-center border border-zinc-300 dark:border-zinc-700 overflow-hidden">
            <div className="w-full h-[22.4rem] overflow-hidden">
              <Image
                width={370}
                height={370}
                alt=""
                src="/gameoflife.png"
                className="h-full transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-4 mb-2 font-medium text-sm text-zinc-500">
              Benjamin&apos;s game of life
            </p>
            <h1 className="flex mb-4 font-bold text-zinc-800 dark:text-zinc-200">
              GAME OF LIFE
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work4;
