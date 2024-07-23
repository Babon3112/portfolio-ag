"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work8 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="tablet:mr-8 mobile:ml-8 tablet:ml-0 max-mobile:mt-8 flex flex-col justify-center items-center">
        <Link
          href="https://babon3112.github.io/javascript-projects/projects/10-StopWatch/index.html"
          target="_blank"
        >
          <div className="bg-gray-50 dark:bg-gray-800 w-[23rem] rounded-2xl flex flex-col items-center border border-gray-300 dark:border-gray-700 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={370}
                height={370}
                alt=""
                src="/stopwatch.png"
                className="h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              Record Your Time
            </p>
            <h1 className="flex mb-1 font-bold text-gray-800 dark:text-gray-200">
              STOPWATCH
              <GitHub />
            </h1>
          </div>
        </Link>
        <Link
          href="https://babon3112.github.io/Rock-Paper-Scissor/"
          target="_blank"
        >
          <div className="bg-gray-50 dark:bg-gray-800 mt-8 w-[23rem] rounded-2xl flex flex-col items-center border border-gray-300 dark:border-gray-700 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={370}
                height={370}
                alt=""
                src="/rockpaperscissor.png"
                className="h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              Have Some Chill
            </p>
            <h1 className="flex mb-1 font-bold text-gray-800 dark:text-gray-200">
              ROCK PAPER SCISSOR
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work8;
