"use client";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const Contact1 = () => {
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
      <div className="tablet:w-[30rem] border border-gray-300 bg-white rounded-xl p-8 text-sm font-medium">
        <h1 className="text-2xl font-semibold text-center text-gray-600">
          GET IN TOUCH
        </h1>
        <form className="flex flex-col mx-6 mt-6 space-y-8 justify-center items-center">
          <input
            className="w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
            type="text"
            name=""
            placeholder="Enter Your Name"
            required
          />
          <input
            className="remove-arrow w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
            type="number"
            name=""
            placeholder="Enter Your Mobile No."
            required
          />
          <input
            className="w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
            type="email"
            name=""
            placeholder="Enter Your Email"
            required
          />
          <textarea
            className="w-full p-2 h-32 border rounded-2xl focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-500 placeholder:font-normal"
            name=""
            placeholder="Share Your Feedback..."
            required
          />
          <button
            className="group contactButton border rounded-2xl w-32 h-16 text-lg overflow-hidden flex justify-center items-center"
            type="submit"
          >
            <Send
              fill="black"
              className="sendButton mr-2 size-8 transition-all duration-300 group-hover:fill-[#FF9954] group-hover:rotate-45 group-hover:translate-x-6 group-hover:scale-110"
              color="white"
              strokeWidth={0.5}
            />
            <p className="transition-all duration-300 group-hover:translate-x-20">
              Send
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
