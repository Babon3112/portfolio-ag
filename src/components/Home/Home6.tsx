"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Discord, Gmail, LinkedIn, Telegram, Whatsapp } from "../svgs";

const Home6 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3050);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="border border-zinc-300 bg-zinc-50 rounded-xl mt-10 tablet:mt-0 mobile:mt-7 h-52 w-[23rem] mobile:w-[30rem] dark:border-zinc-700 dark:bg-zinc-800">
        <div className="flex justify-evenly items-center border-b border-zinc-300 dark:border-zinc-700 h-[9.1rem]">
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=arnabg3112@gmail.com&tf=cm"
            target="_blank"
            className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full transition-all duration-200"
          >
            <Gmail height={45} width={45} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/babon3112"
            target="_blank"
            className="border border-[#0077B5] rounded-full hover:bg-[#0077B5] transition-all duration-200"
          >
            <LinkedIn height={45} width={45} />
          </Link>
          <Link
            href="https://discord.com/invite/syEmGjNR"
            target="_blank"
            className="border border-[#5865f2] rounded-full hover:bg-[#5865f2] transition-all duration-200"
          >
            <Discord height={45} width={45} />
          </Link>
          <Link
            href="https://t.me/Babon3112"
            target="_blank"
            className="border border-[#24a1de] rounded-full hover:bg-[#24a1de] transition-all duration-200"
          >
            <Telegram height={45} width={45} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=916295400897"
            target="_blank"
            className="border border-[#25d366] rounded-full hover:bg-[#25d366] transition-all duration-200"
          >
            <Whatsapp height={45} width={45} />
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=arnabbabon2002@gmail.com&tf=cm"
            target="_blank"
            className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full transition-all duration-200"
          >
            <Gmail height={45} width={45} />
          </Link>
        </div>
        <div className="flex flex-col items-center my-2">
          <p className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold ">
            GET IN TOUCH
          </p>
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Profiles
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home6;
