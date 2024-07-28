"use client";
import { FileDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const Home8 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 4250);

    return () => clearTimeout(timer);
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "Arnab Ghosh Resume.pdf";
    link.download = "Arnab Ghosh Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col w-[23rem] h-52 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-2xl tablet:m-0 mt-10">
        <div className="flex justify-center my-1">
          <Image src="/cv.png" width={170} height={170} alt="" />
        </div>
        <div
          className="w-full border-t border-zinc-300 dark:border-zinc-700 cursor-pointer"
          onClick={downloadResume}
        >
          <div className="flex text-zinc-600 dark:text-zinc-400 text-xs justify-center font-semibold mt-2">
            DOWNLOAD CV <FileDown className="size-4" />
          </div>
          <h1 className="text-xl font-bold text-center mb-2 text-zinc-900 dark:text-zinc-100">
            Curriculum Vitae
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home8;
