"use client";
import { FileDown } from "lucide-react";
import { useEffect, useState } from "react";

const Home8 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 4250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col w-96 border border-gray-300 rounded-2xl tablet:m-0 mt-10">
        <div className="flex justify-center">
          <img src="desktop.png" alt="" className="w-48 m-3 mt-1 mb-1" />
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="flex text-gray-500 text-xs justify-center font-semibold mt-3">
            DOWNLOAD CV <FileDown className="size-4" />
          </div>
          <h1 className="text-xl font-bold text-center mb-3">
            Curriculum Vitae
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home8;
