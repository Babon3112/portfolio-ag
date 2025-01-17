"use client";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border-b dark:border-zinc-700 border-zinc-300">
      <div className="mx-auto h-24 flex mobile:max-w-7xl items-center justify-between px-4 py-2 mobile:px-6 laptop:px-8">
        <h1 className="font-sofia font-bold text-2xl tablet:text-3xl text-zinc-950 dark:text-zinc-50">
          Arnab&apos;s Portfolio
        </h1>
        <div className="hidden mobile:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`font-semibold text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all ${
                    pathname === item.href && "animate-pulse"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  max-mobile:hidden">
          <DarkModeToggle />
          <Link
            href={"https://www.linkedin.com/in/babon3112/"}
            target="_blank"
            type="button"
            className="bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 px-4 py-3 shadow-sm rounded-full border border-zinc-300 dark:border-zinc-700 hover:shadow-lg hover:transition-all text-lg hover:text-zinc-800 dark:hover:text-zinc-200 duration-100 ease-in-out text-center"
          >
            Know More!
          </Link>
        </div>
        <div className="mobile:hidden flex items-center">
          <DarkModeToggle />
          {isMenuOpen ? (
            <X
              onClick={toggleMenu}
              strokeWidth={3}
              size={30}
              className="cursor-pointer text-black dark:text-zinc-50 animate-bounce"
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              strokeWidth={3}
              size={30}
              className="cursor-pointer text-black dark:text-zinc-50"
            />
          )}
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-20 z-50 origin-top-right transform backdrop-blur-lg p-8 transition laptop:hidden w-full flex justify-center">
            <nav className="grid gap-y-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center rounded-md text-xl ${
                    pathname === item.href && "animate-pulse"
                  }`}
                >
                  <span className="text-black dark:text-zinc-50">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
