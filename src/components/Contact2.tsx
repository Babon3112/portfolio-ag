"use client";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Contact2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-96 mobile:w-[40rem] tablet:w-80 border border-gray-300 bg-white rounded-xl p-5 pl-6 text-sm text-gray-500 space-y-2 mt-10 tablet:mt-0">
        <h3 className="flex">
          <Phone className="size-5 mr-1" />
          +91 6295 400 897
        </h3>
        <h3 className="flex">
          <Mail className="size-5 mr-1" />
          arnabg3112@gmail.com
        </h3>
        <h3 className="flex">
          <Mail className="size-5 mr-1" />
          arnabbabon2002@gmail.com
        </h3>
      </div>
    </div>
  );
};

export default Contact2;
