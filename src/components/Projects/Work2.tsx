"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHub } from "../svgs";

const Work2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="tablet:mr-8 mobile:ml-8 max-mobile:mt-8 flex flex-col justify-center items-center">
        <Link href="https://music-school-beige.vercel.app/" target="_blank">
          <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                src="/musicacademy.png"
                alt=""
                width={335}
                height={335}
                className="rounded-tr-2xl rounded-tl-2xl h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              NextJS UI Design
            </p>
            <h1 className="flex mb-1 font-bold">
              Music Academy
              <GitHub />
            </h1>
          </div>
        </Link>
        <Link href="https://shadowconnect.vercel.app/" target="_blank">
          <div className="bg-white mt-8 w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full overflow-hidden">
              <Image
                width={335}
                height={335}
                alt=""
                src="/shadowconnect.png"
                className="rounded-tr-2xl rounded-tl-2xl h-[9.5rem] object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-1 font-medium text-sm text-gray-500">
              Anonymous Feedback Website
            </p>
            <h1 className="flex mb-1 font-bold">
              SHADOWCONNECT
              <GitHub />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work2;
