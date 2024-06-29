"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href={"/about"}>
        <div className="border border-gray-300 bg-white rounded-xl text-center h-full w-full mobile:w-56 ml-1 mt-2 mobile:mt-0">
          <div className="border-b border-gray-300 flex justify-center">
            <img src="aboutme.png" alt="" className="w-48 m-3 mt-2 mb-2" />
          </div>
          <p className="text-gray-500 text-xs font-semibold mt-3">
            MORE ABOUT ME
          </p>
          <h1 className="text-xl font-bold mb-3">Credentials</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home2;
