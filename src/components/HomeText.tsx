"use client";
import { useEffect, useState } from "react";

const HomeText = () => {
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
      <div className="mt-5 tablet:mt-0 text-gray-950 w-96 mobile:w-[30rem] h-10 overflow-hidden border border-gray-300 rounded-full flex items-center justify-center relative bg-white p-2">
        <div className="marquee">
          <p>
            Welcome to the Official portfolio of Arnab Ghosh, This platform is
            more than just a showcase of my projects, it&apos;s a reflection of
            my passion, dedication, and growth as a professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
