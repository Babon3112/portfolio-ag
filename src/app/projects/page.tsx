"use client";
import Work1 from "@/components/Projects/Work1";
import Work2 from "@/components/Projects/Work2";
import Work3 from "@/components/Projects/Work3";
import Work4 from "@/components/Projects/Work4";
import Work5 from "@/components/Projects/Work5";
import Work6 from "@/components/Projects/Work6";
import Work7 from "@/components/Projects/Work7";
import Work8 from "@/components/Projects/Work8";
import Work9 from "@/components/Projects/Work9";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const WorksPage = () => {
  const [moreProjects, setMoreProjects] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const showMoreProjects = () => {
    setMoreProjects(!moreProjects);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-zinc-200 dark:bg-zinc-950">
      <div className="mx-auto flex justify-center items-center flex-col m-20 max-w-5xl">
        <div className="flex max-mobile:flex-col items-center justify-center">
          <Work1 />
          <Work2 />
          <div className="max-tablet:hidden">
            <Work3 />
          </div>
        </div>
        <div className="mobile:flex tablet:hidden mt-8">
          <Work3 />
          <Work4 />
        </div>
        <div className="flex max-mobile:flex-col justify-center items-center mt-8">
          <div className="max-tablet:hidden">
            <Work4 />
          </div>
          <Work5 />
          <Work6 />
        </div>
        <div
          className={`border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-full p-3 pt-4 pb-2 m-6 transition-all duration-1000 ease-in ${
            showComponent ? "opacity-100" : "opacity-0"
          }`}
        >
          {moreProjects ? (
            <ArrowUp
              size={30}
              strokeWidth={1.5}
              onClick={showMoreProjects}
              className="animate-bounce cursor-pointer"
            />
          ) : (
            <ArrowDown
              size={30}
              strokeWidth={1.5}
              onClick={showMoreProjects}
              className="animate-bounce cursor-pointer"
            />
          )}
        </div>
        {moreProjects && (
          <>
            <div className="mobile:flex">
              <Work7 />
              <Work8 />
              <div className="max-tablet:hidden">
                <Work9 />
              </div>
            </div>
            <div className="tablet:hidden mt-8">
              <Work9 />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorksPage;
