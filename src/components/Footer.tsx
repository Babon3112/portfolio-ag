import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-10 bg-zinc-100 dark:bg-zinc-900 border-t dark:border-zinc-700 border-zinc-300">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Designed and Developed By
      </p>
      <h1 className="font-cookie text-6xl m-4 text-zinc-900 dark:text-zinc-50">
        Arnab Ghosh
      </h1>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        © 2024 All rights reserved by Arnab Ghosh.
      </p>
    </div>
  );
};

export default Footer;
