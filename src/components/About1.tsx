"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const About1 = () => {
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
      <div className="border border-gray-300 rounded-2xl bg-white w-96 mobile:w-[40rem] tablet:w-80">
        <div className="flex justify-center mt-8">
          <Image
            src="/Image2.jpg"
            alt="_blank"
            width={250}
            height={250}
            className="rounded-tr-xl rounded-tl-xl"
          />
        </div>
        <div className="mt-4 mb-9 w-full flex-col flex justify-center items-center">
          <h1 className="text-4xl font-playwrite font-bold mb-3  text-gray-900">
            Arnab Ghosh
          </h1>
          <p className="text-sm text-gray-600 ml-10 mr-10">
            I am a <b>Next developer</b> and a<b> MERN stack enthusiast </b>
            graduated from B.Tech in Computer Science Engineering from JIS
            University. Seeking an Organization to improve my skills and
            contribute my Acadamic Learning. Looking forward to discussing how I
            align with your Organization&apos;s goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
