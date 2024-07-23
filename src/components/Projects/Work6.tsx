"use client";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GitHub } from "../svgs";

const Work6 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mobile:mt-0 mt-6">
        <Link href="https://github.com/Babon3112/VibeCheck" target="_blank">
          <div className="bg-gray-50 dark:bg-gray-800 w-[23rem] rounded-2xl flex flex-col items-center border border-gray-300 dark:border-gray-700 overflow-hidden">
            <div className="w-full h-[15.5rem] overflow-hidden">
              <Image
                width={370}
                height={370}
                alt=""
                src="/vibecheck.png"
                className="h-full object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-2 mb-2 font-medium text-sm text-gray-500">
              YouTube Comment Analyzer
            </p>
            <h1 className="flex mb-2 font-bold text-gray-800 dark:text-gray-200">
              VIBECHECK
              <GitHub />
            </h1>
          </div>
        </Link>
        <div className="border border-gray-300 dark:border-gray-700 mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 h-24 w-[23rem] flex justify-center items-center">
          <Link href="https://github.com/Babon3112" target="_blank">
            <div className="text-center text-lg tracking-widest flex items-center justify-center hover:underline decoration-2 space-x-3 hover:space-x-6 transition-all duration-300 text-gray-800 dark:text-gray-200 font-semibold">
              <h1 className="transition-all duration-300">GITHUB PROFILE</h1>
              <MoveRight
                className="size-7 transition-all duration-300"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work6;
