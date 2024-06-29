"use client";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const About3 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mt-8 w-96 mobile:w-[40rem] tablet:w-80 border border-gray-300 bg-white rounded-xl p-5 pl-6 text-sm text-gray-500 font-medium">
        <h3 className="flex mt-1">
          <Mail className="size-5 mr-1" />
          arnabg3112@gmail.com
        </h3>
        <h3 className="flex mt-1.5 mb-1.5">
          <Mail className="size-5 mr-1" />
          arnabbabon2002@gmail.com
        </h3>
        <h3 className="flex mb-1">
          <MapPin className="size-5 mr-1" />
          Chunait, Arambagh, Hooghly, 712413
        </h3>
      </div>
    </div>
  );
};

export default About3;
