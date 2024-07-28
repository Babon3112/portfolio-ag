"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import {
  CSS,
  Git,
  HTML,
  JS,
  Java,
  Mongo,
  Next,
  Node,
  Post,
  React,
  TCSS,
  VS,
} from "../svgs";

const About5 = () => {
  const [isJS, setIsJS] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isReact, setIsReact] = useState(false);
  const [isNode, setIsNode] = useState(false);
  const [isJava, setIsJava] = useState(false);
  const [isHTML, setIsHTML] = useState(false);
  const [isCSS, setIsCSS] = useState(false);
  const [isMongo, setIsMongo] = useState(false);
  const [isTCss, setIsTCss] = useState(false);
  const [isGit, setIsGit] = useState(false);
  const [isVS, setIsVS] = useState(false);
  const [isPost, setIsPost] = useState(false);

  const [moredata, setmoredata] = useState(false);

  function hideshow() {
    setmoredata(!moredata);
  }
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mt-8 mb-8 border border-zinc-300 rounded-2xl bg-zinc-50 pt-4 mobile:p-4 p-2 mobile:pb-2 w-[23rem] mobile:w-[40rem] dark:border-zinc-700 dark:bg-zinc-800">
        <h1 className="text-center text-lg font-semibold tracking-wider hover:tracking-widest transition-all duration-500 dark:text-zinc-50">
          | Skills {moredata && <span>& Softwares</span>} |
        </h1>
        <div>
          <div className="flex justify-evenly mt-6">
            <div
              onMouseEnter={() => setIsJS(true)}
              onMouseLeave={() => setIsJS(false)}
              className="border border-[#ffd600] rounded-full hover:bg-[#ffd600]"
            >
              {!isJS ? (
                <div className="p-2">
                  <JS />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[16px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  80%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsNext(true)}
              onMouseLeave={() => setIsNext(false)}
              className="border border-[#000] rounded-full  hover:bg-[#000]"
            >
              {!isNext ? (
                <div className="p-2">
                  <Next />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[16px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  60%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsReact(true)}
              onMouseLeave={() => setIsReact(false)}
              className="border border-[#00D8FF] rounded-full  hover:bg-[#00D8FF]"
            >
              {!isReact ? (
                <div className="p-2">
                  <React />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[17px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  70%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsNode(true)}
              onMouseLeave={() => setIsNode(false)}
              className="border border-[#388e3c] rounded-full  hover:bg-[#388e3c]"
            >
              {!isNode ? (
                <div className="p-2">
                  <Node />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[17px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  75%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsJava(true)}
              onMouseLeave={() => setIsJava(false)}
              className="border border-[#5382A1] rounded-full  hover:bg-[#5382A1]"
            >
              {!isJava ? (
                <div className="p-2">
                  <Java />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[16.5px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  65%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsHTML(true)}
              onMouseLeave={() => setIsHTML(false)}
              className="border-[#ff5900] border rounded-full  hover:bg-[#ff5900]"
            >
              {!isHTML ? (
                <div className="p-2">
                  <HTML />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[16.5px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  90%
                </h2>
              )}
            </div>
            <div
              onMouseEnter={() => setIsCSS(true)}
              onMouseLeave={() => setIsCSS(false)}
              className="border border-[#00aaff] rounded-full  hover:bg-[#00aaff]"
            >
              {!isCSS ? (
                <div className="p-2">
                  <CSS />
                </div>
              ) : (
                <h2 className="h-full font-revalia text-xs mobile:text-[16.5px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                  90%
                </h2>
              )}
            </div>
          </div>
          {moredata && (
            <div className="flex justify-evenly mt-6">
              <div
                onMouseEnter={() => setIsMongo(true)}
                onMouseLeave={() => setIsMongo(false)}
                className="border border-[#599636] rounded-full  hover:bg-[#599636]"
              >
                {!isMongo ? (
                  <div className="p-2">
                    <Mongo />
                  </div>
                ) : (
                  <h2 className="h-full font-revalia text-xs mobile:text-[16.5px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                    65%
                  </h2>
                )}
              </div>
              <div
                onMouseEnter={() => setIsTCss(true)}
                onMouseLeave={() => setIsTCss(false)}
                className="border border-[#06b6d4] rounded-full  hover:bg-[#06b6d4]"
              >
                {!isTCss ? (
                  <div className="p-2">
                    <TCSS />
                  </div>
                ) : (
                  <h2 className="h-full font-revalia text-xs mobile:text-[16px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                    85%
                  </h2>
                )}
              </div>
              <div
                onMouseEnter={() => setIsGit(true)}
                onMouseLeave={() => setIsGit(false)}
                className="border border-[#F4511E] rounded-full  hover:bg-[#f4511e]"
              >
                {!isGit ? (
                  <div className="p-2">
                    <Git />
                  </div>
                ) : (
                  <h2 className="h-full font-revalia text-xs mobile:text-[16px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                    60%
                  </h2>
                )}
              </div>
              <div
                onMouseEnter={() => setIsVS(true)}
                onMouseLeave={() => setIsVS(false)}
                className="border border-[#29b6f6] rounded-full hover:bg-[#29b6f6]"
              >
                {!isVS ? (
                  <div className="p-2">
                    <VS />
                  </div>
                ) : (
                  <h2 className="h-full font-revalia text-xs mobile:text-[16px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                    80%
                  </h2>
                )}
              </div>
              <div
                onMouseEnter={() => setIsPost(true)}
                onMouseLeave={() => setIsPost(false)}
                className="border border-[#FF6C37] rounded-full hover:bg-[#ff6c37]"
              >
                {!isPost ? (
                  <div className="p-2">
                    <Post />
                  </div>
                ) : (
                  <h2 className="h-full font-revalia text-xs mobile:text-[16.8px] flex justify-center items-center text-zinc-50 font-semibold p-1">
                    75%
                  </h2>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center mt-6 dark:text-zinc-400 text-zinc-900">
          {moredata ? (
            <ChevronUp
              className="cursor-pointer animate-bounce"
              onClick={hideshow}
            />
          ) : (
            <ChevronDown
              className="cursor-pointer animate-bounce"
              onClick={hideshow}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About5;
