"use client";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <div className="mt-8 w-[23rem] mobile:w-[40rem] tablet:w-80 border border-zinc-300 bg-zinc-50 rounded-xl p-5 pl-6 text-sm text-zinc-500 space-y-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
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
        <h3 className="flex">
          <MapPin className="size-5 mr-1" />
          Chunait, Arambagh, Hooghly, 712413
        </h3>
      </div>
    </div>
  );
};

export default About3;
