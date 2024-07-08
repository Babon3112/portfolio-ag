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
      <div className="flex border border-gray-300 rounded-2xl bg-white w-[21rem] mobile:w-[30rem] h-[16rem] justify-center items-center mr-0 tablet:mr-5 mb-2 tablet:mb-0">
        <div className="ml-8 mr-4">
          <Image
            src="/Image.png"
            alt="_blank"
            className="rounded-tr-2xl rounded-bl-2xl"
            width={325}
            height={325}
          />
        </div>
        <div className="mt-6 mb-6 mr-6 ml-3">
          <h4 className="text-sm mobile:text-[14.5px] text-gray-400 font-semibold tracking-wider">
            Full-Stack DEVELOPER
          </h4>
          <h1 className="text-3xl mobile:text-5xl font-playwrite font-bold mb-3 mt-3 text-gray-900">
            Arnab Ghosh
          </h1>
          <p className="text-xs tablet:text-sm text-gray-500">
            I am a web Developer based on Arambagh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
