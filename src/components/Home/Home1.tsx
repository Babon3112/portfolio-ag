"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home1 = () => {
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
      <div className="flex border border-gray-300 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800 w-[23rem] mobile:w-[30rem] mobile:h-[16rem] justify-center items-center mr-0 tablet:mr-5 mb-2 tablet:mb-0 mobile:p-8 p-4">
        <div>
          <Image
            src="/Image.png"
            alt="_blank"
            className="rounded-tr-2xl rounded-bl-2xl"
            width={325}
            height={325}
          />
        </div>
        <div className="ml-4 mobile:space-y-4 space-y-2">
          <h4 className="text-sm mobile:text-[14.5px] text-gray-500 font-semibold tracking-wider">
            Full-Stack DEVELOPER
          </h4>
          <h1 className="text-3xl mobile:text-5xl font-playwrite font-bold text-gray-950 dark:text-gray-50">
            Arnab Ghosh
          </h1>
          <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-400">
            I am a full-stack Developer based on Arambagh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
