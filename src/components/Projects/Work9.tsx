"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bad, GitHub, Happy, Love, Neutral, Smile, Wow } from "../svgs";
import axios from "axios";
import { useDebounceValue } from "usehooks-ts";

const Work9 = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [rating, setRating] = useState(0);
  const [debouncedValue, setValue] = useDebounceValue(0, 2000);

  useEffect(() => {
    const savedRating = localStorage.getItem("userRating");
    if (savedRating) {
      const parsedRating = parseInt(savedRating, 10);
      setRating(parsedRating);
    }

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
    setValue(ratingValue);
    localStorage.setItem("userRating", ratingValue.toString());
  };

  useEffect(() => {
    const giveRating = async () => {
      if (debouncedValue > 0) {
        try {
          await axios.post("/api/rating", { rating: debouncedValue });
        } catch (error) {
          console.error("Error submitting rating:", error);
        }
      }
    };
    giveRating();
  }, [debouncedValue]);

  const getEmoji = () => {
    switch (rating) {
      case 1:
        return <Bad />;
      case 2:
        return <Neutral />;
      case 3:
        return <Smile />;
      case 4:
        return <Wow />;
      case 5:
        return <Love />;
      default:
        return <Happy />;
    }
  };

  return (
    <div
      className={`transition-all duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mobile:mt-0 mt-6">
        <Link href="https://github.com/Babon3112/portfolio-ag" target="_blank">
          <div className="bg-zinc-50 dark:bg-zinc-800 w-[23rem] rounded-2xl flex flex-col items-center border border-zinc-300 dark:border-zinc-700 overflow-hidden">
            <div className="w-full h-[15.5rem] overflow-hidden">
              <Image
                width={370}
                height={370}
                alt="Portfolio"
                src="/portfolio.png"
                className="h-full transform transition-all duration-300 hover:scale-110 object-cover"
              />
            </div>
            <p className="mt-2 mb-2 font-medium text-sm text-zinc-500">
              Portfolio Design
            </p>
            <h1 className="flex mb-2 font-bold text-zinc-800 dark:text-zinc-200">
              MY PORTFOLIO
              <GitHub />
            </h1>
          </div>
        </Link>
        <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 w-[23rem] h-[5.8rem] mt-8 rounded-2xl">
          <p className="text-center mb-1 text-zinc-900 dark:text-zinc-300">
            -rate my projects-
          </p>
          <div className="flex justify-center items-center">
            <div className="rating flex flex-row-reverse justify-center ml-16">
              {[5, 4, 3, 2, 1].map((value) => (
                <React.Fragment key={value}>
                  <input
                    onClick={() => handleRating(value)}
                    className="hidden"
                    value={value}
                    name="rating"
                    id={`star${value}`}
                    type="radio"
                    checked={rating === value}
                    readOnly
                  />
                  <label
                    onClick={() => handleRating(value)}
                    htmlFor={`star${value}`}
                    className={`text-4xl cursor-pointer transition-all duration-300 ease-in-out ${
                      rating >= value
                        ? "text-[#fbb40a]"
                        : "text-zinc-300 dark:text-zinc-700"
                    }`}
                  >
                    ★
                  </label>
                </React.Fragment>
              ))}
            </div>
            <div className="ml-7">{getEmoji()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work9;
