"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work1 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <div className="border border-zinc-300 dark:border-zinc-700 rounded-2xl bg-zinc-50 dark:bg-zinc-800 h-24 w-[23rem] flex justify-center items-center">
          <Link
            href="https://github.com/Babon3112?tab=repositories"
            target="_blank"
          >
            <h1 className="text-center text-xl font-semibold tracking-wider hover:tracking-widest transition-all duration-500 text-zinc-900  dark:text-zinc-300">
              | ALL PROJECTS |
            </h1>
          </Link>
        </div>
        <Link href="https://eazybuy-ag.vercel.app/" target="_blank">
          <div className="bg-zinc-50 dark:bg-zinc-800 mt-8 w-[23rem] rounded-2xl flex flex-col items-center border border-zinc-300 dark:border-zinc-700 overflow-auto">
            <div className="w-full overflow-hidden">
              <Image
                src="/eazybuy.png"
                alt=""
                width={370}
                height={370}
                className="h-[13.5rem] transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-5 mb-3 font-medium text-sm text-zinc-500">
              E-Commerce Platform
            </p>
            <h1 className="flex mb-5 font-bold text-zinc-800 dark:text-zinc-200">
              EAZYBUY
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work1;
