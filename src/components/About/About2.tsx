"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Discord, Gmail, LinkedIn, Telegram, Whatsapp } from "../svgs";

const About2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-evenly items-center h-24 border border-gray-300 bg-gray-50 rounded-xl w-[23rem] mobile:w-[40rem] tablet:w-80 mt-8 dark:border-gray-700 dark:bg-gray-800">
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=arnabg3112@gmail.com&tf=cm"
          target="_blank"
          className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full transition-all duration-200"
        >
          <Gmail height={40} width={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/babon3112"
          target="_blank"
          className="border border-[#0077B5] rounded-full hover:bg-[#0077B5] transition-colors duration-200"
        >
          <LinkedIn height={40} width={40} />
        </Link>
        <Link
          href="https://discord.com/invite/syEmGjNR"
          target="_blank"
          className="border border-[#5865f2] rounded-full hover:bg-[#5865f2] transition-colors duration-200"
        >
          <Discord height={40} width={40} />
        </Link>
        <Link
          href="https://t.me/Babon3112"
          target="_blank"
          className="border border-[#24a1de] rounded-full hover:bg-[#24a1de] transition-colors duration-200"
        >
          <Telegram height={40} width={40} />
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=916295400897"
          target="_blank"
          className="border border-[#25d366] rounded-full hover:bg-[#25d366] transition-colors duration-200"
        >
          <Whatsapp height={40} width={40} />
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=arnabg3112@gmail.com&tf=cm"
          target="_blank"
          className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full transition-all duration-200"
        >
          <Gmail height={40} width={40} />
        </Link>
      </div>
    </div>
  );
};

export default About2;
