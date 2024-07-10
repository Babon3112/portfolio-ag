"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work7 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="https://babon3112.github.io/Tic-Tac-Toe/" target="_blank">
        <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 tablet:mr-8 overflow-hidden">
          <div className="w-full h-[22.4rem] overflow-hidden">
            <Image
              width={335}
              height={335}
              alt=""
              src="/tictactoe.png"
              className="rounded-tr-2xl rounded-tl-2xl h-full object-cover transform transition-all duration-300 hover:scale-110"
            />
          </div>
          <p className="mt-4 mb-2 font-medium text-sm text-gray-500">
            Play With Your Friends
          </p>
          <h1 className="flex mb-4 font-bold">
            TIC TAC TOE
            <GitHub />
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Work7;