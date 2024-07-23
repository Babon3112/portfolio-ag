import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-10 bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700 border-gray-300">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Designed and Developed By
      </p>
      <h1 className="font-cookie text-6xl m-4 text-gray-900 dark:text-gray-50">
        Arnab Ghosh
      </h1>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 All rights reserved by Arnab Ghosh.
      </p>
    </div>
  );
};

export default Footer;
