"use client";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" bg-[#f5f5f5]">
      <div className="mx-auto h-24 flex mobile:max-w-7xl items-center justify-between px-4 py-2 mobile:px-6 laptop:px-8">
        <h1 className="font-sofia font-bold text-2xl tablet:text-3xl text-gray-900">
          Arnab&apos;s Portfolio
        </h1>

        <div className="hidden mobile:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-semibold text-gray-600 hover:text-gray-900 transition-all duration-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mobile:block">
          <Link
            href={"https://www.linkedin.com/in/babon3112/"}
            target="_blank"
            type="button"
            className="bg-white text-gray-700 px-4 py-3 shadow-sm rounded-full border border-gray-300 hover:shadow-lg hover:transition-all text-lg hover:text-gray-900 duration-100 ease-in-out"
          >
            Know More!
          </Link>
        </div>
        <div className="mobile:hidden transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          {isMenuOpen ? (
            <div className="cursor-pointer text-black">
              <X onClick={toggleMenu} strokeWidth={3} size={30} />
            </div>
          ) : (
            <div className="cursor-pointer text-black">
              <Menu onClick={toggleMenu} strokeWidth={3} size={30} />
            </div>
          )}
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-20 z-50 origin-top-right transform backdrop-blur-lg p-8 transition laptop:hidden w-full flex justify-center">
            <nav className="grid gap-y-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-md p-3 text-xl"
                >
                  <span className=" text-black">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
