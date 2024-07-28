"use client";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

const About4 = () => {
  const [eucationShow, setEducationShow] = useState(false);

  const toggleEducation = () => {
    setEducationShow(!eucationShow);
  };
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="border border-zinc-300 rounded-2xl bg-zinc-50 p-4 mobile:pb-2 w-[23rem] mobile:w-[40rem] dark:border-zinc-700 dark:bg-zinc-800">
        <h1 className="text-center text-lg font-semibold tracking-wider hover:tracking-widest transition-all duration-500 dark:text-zinc-50">
          | EDUCATION |
        </h1>
        <div className="mobile:mx-4">
          <div className="flex justify-between mt-4">
            <h2 className="font-medium flex dark:text-zinc-300">
              <GraduationCap className="mr-1.5 text-zinc-600 dark:text-zinc-400" />
              JIS University
            </h2>
            <p className="text-zinc-500 font-medium">2020 - 2024</p>
          </div>
          {eucationShow && (
            <div className="text-zinc-600 mt-4 ml-6 space-y-3 text-sm dark:text-zinc-400">
              <p>Computer Science Engineering - B.Tech</p>
              <Progress value={77.8} className="w-[65%]" />
              <p>CGPA: 8.28</p>
            </div>
          )}
        </div>
        <div className="mobile:mx-4">
          <div className="flex justify-between mt-4">
            <h2 className="font-medium flex dark:text-zinc-300">
              <GraduationCap className="mr-1.5 text-zinc-600 dark:text-zinc-400" />
              Dhamsa P. C. Sen Institution
            </h2>
            <p className="text-zinc-500 font-medium">2012 - 2020</p>
          </div>
          {eucationShow && (
            <div className="text-zinc-600 mt-4 ml-6 space-y-3 text-sm dark:text-zinc-400">
              <p>High School - Science</p>
              <Progress value={80} className="w-[65%]" />
              <p>Marks: 83.57%</p>
              <p>Secondary Examination</p>
              <Progress value={83.57} className="w-[65%]" />
              <p>Marks: 80%</p>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center mt-4 dark:text-zinc-400 text-zinc-900">
          {eucationShow ? (
            <ChevronUp
              className="cursor-pointer animate-bounce"
              onClick={toggleEducation}
            />
          ) : (
            <ChevronDown
              className="cursor-pointer animate-bounce"
              onClick={toggleEducation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About4;
