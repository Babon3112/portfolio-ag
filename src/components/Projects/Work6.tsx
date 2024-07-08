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
          <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full h-[15.5rem] overflow-hidden">
              <Image
                width={335}
                height={335}
                alt=""
                src="/vibecheck.png"
                className="rounded-tr-2xl rounded-tl-2xl h-full object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-2 mb-2 font-medium text-sm text-gray-500">
              Youtube Comment Analyzer
            </p>
            <h1 className="flex mb-2 font-bold">
              VIBECHECK
              <GitHub />
            </h1>
          </div>
        </Link>
        <div className="border border-gray-300 mt-8 rounded-2xl bg-white h-24 w-[21rem] flex justify-center items-center">
          <Link href="https://github.com/Babon3112" target="_blank">
            <div className="text-center text-[16px] font-medium tracking-widest flex items-center justify-center hover:underline decoration-2 space-x-3 hover:space-x-6 transition-all duration-300">
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
