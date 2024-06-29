"use client";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Work9 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [initial, setinitial] = useState(true);
  const [firststr, setfirststr] = useState(false);
  const [secondstr, setsecondstr] = useState(false);
  const [thirdstr, setthirdstr] = useState(false);
  const [fourthstr, setfourthstr] = useState(false);
  const [fifthstr, setfifthstr] = useState(false);

  function starOne() {
    setfirststr(true);
    setinitial(false);
    setsecondstr(false);
    setthirdstr(false);
    setfourthstr(false);
    setfifthstr(false);
  }
  function starTwo() {
    setsecondstr(true);
    setfirststr(false);
    setinitial(false);
    setthirdstr(false);
    setfourthstr(false);
    setfifthstr(false);
  }
  function starthree() {
    setthirdstr(true);
    setfirststr(false);
    setinitial(false);
    setsecondstr(false);
    setfourthstr(false);
    setfifthstr(false);
  }
  function starfour() {
    setfourthstr(true);
    setthirdstr(false);
    setfirststr(false);
    setinitial(false);
    setsecondstr(false);
    setfifthstr(false);
  }
  function starfive() {
    setfifthstr(true);
    setfourthstr(false);
    setthirdstr(false);
    setfirststr(false);
    setinitial(false);
    setsecondstr(false);
  }

  return (
    <div
      className={`transition-all duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mobile:mt-0 mt-6">
        <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
          <div className="w-full h-[15.5rem] overflow-hidden">
            <Image
              alt=""
              src="portfolio.png"
              className="rounded-tr-2xl rounded-tl-2xl w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
            />
          </div>
          <p className="mt-2 mb-2 font-medium text-sm text-gray-500">
            Portfolio Design
          </p>
          <h1 className="flex mb-2 font-bold">
            Arnab's Porfolio
            <svg
              width="20px"
              height="20px"
              className="cf-icon-svg"
              viewBox="-2.5 0 19 19"
            >
              <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
            </svg>
          </h1>
        </div>

        <div className="bg-white border border-gray-300 w-[21rem] h-[5.8rem] mt-8 rounded-2xl">
          <p className="text-center mb-1">-rate my projects-</p>
          <div className="flex justify-center items-center">
            <div className="rating flex flex-row-reverse justify-center">
              <input
                onClick={starfive}
                className="hidden"
                value="5"
                name="rating"
                id="star5"
                type="radio"
              />
              <label
                htmlFor="star5"
                className=" before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
              ></label>
              <input
                onClick={starfour}
                className="hidden"
                value="4"
                name="rating"
                id="star4"
                type="radio"
              />
              <label
                htmlFor="star4"
                className=" before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
              ></label>
              <input
                onClick={starthree}
                className="hidden"
                value="3"
                name="rating"
                id="star3"
                type="radio"
              />
              <label
                htmlFor="star3"
                className=" before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
              ></label>
              <input
                onClick={starTwo}
                className="hidden"
                value="2"
                name="rating"
                id="star2"
                type="radio"
              />
              <label
                htmlFor="star2"
                className=" before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
              ></label>
              <input
                onClick={starOne}
                className="hidden"
                value="1"
                name="rating"
                id="star1"
                type="radio"
              />
              <label
                htmlFor="star1"
                className=" before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
              ></label>
            </div>
            <span>
              {initial && (
                <svg
                  opacity={0}
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-expressionless"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
              )}
              {firststr && (
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-expressionless"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
              )}
              {secondstr && (
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-neutral"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z" />
                </svg>
              )}
              {thirdstr && (
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              )}
              {fourthstr && (
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-laughing"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              )}
              {fifthstr && (
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-sunglasses"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                </svg>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work9;
