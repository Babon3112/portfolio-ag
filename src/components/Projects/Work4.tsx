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
        <Link
          href="https://babon3112.github.io/javascript-projects/projects/10-StopWatch/index.html"
          target="_blank"
        >
          <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={335}
                height={335}
                alt=""
                src="/stopwatch.png"
                className="rounded-tr-2xl rounded-tl-2xl h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              Record Your Time
            </p>
            <h1 className="flex mb-1 font-bold">
              StopWatch
              <GitHub />
            </h1>
          </div>
        </Link>
        <Link
          href="https://github.com/Babon3112/Blogify-with-appwrite"
          target="_blank"
        >
          <div className="bg-white mt-8 w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={335}
                height={335}
                alt=""
                src="/blogify.png"
                className="rounded-tr-2xl rounded-tl-2xl h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              Write Your Experiences
            </p>
            <h1 className="flex mb-1 font-bold">
              BLOGIFY
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work4;
