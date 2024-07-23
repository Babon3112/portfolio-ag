"use client";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Contact3 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mt-8 flex w-[23rem] mobile:w-[40rem] tablet:w-80 border border-gray-300 bg-gray-50 rounded-xl p-5 pl-6 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <MapPin className="size-10 mr-1" />
        <h3 className="flex mb-1">
          Chunait Kalitala, Garerghat Road, Chunait, Arambagh, Hooghly, West
          Bengal, 712413
        </h3>
      </div>
    </div>
  );
};

export default Contact3;
