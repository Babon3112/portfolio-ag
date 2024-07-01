"use client";
import React, { useEffect, useState } from "react";
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

  const [rating, setRating] = useState(0);

  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const getEmoji = () => {
    switch (rating) {
      case 1:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="-27.957"
                cy="8.563"
                r="6"
                gradientTransform="matrix(3 0 0 2.5 107.871 -4.408)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#5987dd" />
                <stop offset=".118" stop-color="#638bd6" />
                <stop offset=".316" stop-color="#7d98c3" />
                <stop offset=".572" stop-color="#a8aba3" />
                <stop offset=".871" stop-color="#e3c678" />
                <stop offset="1" stop-color="#ffd364" />
              </radialGradient>
            </defs>
            <g id="_27-feel_bad" data-name="27-feel bad">
              <circle cx="24" cy="24" r="23" fill="#ffce52" />
              <ellipse
                cx="24"
                cy="17"
                rx="18"
                ry="15"
                fill="url(#radial-gradient)"
              />
              <path
                fill="#ffb32b"
                d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
              />
              <ellipse fill="#273941" cx="33" cy="23" rx="3" ry="4" />
              <ellipse fill="#141e21" cx="33" cy="23" rx="2" ry="3" />
              <circle fill="#f6fafd" cx="34" cy="22" r="1" />
              <ellipse fill="#273941" cx="15" cy="23" rx="3" ry="4" />
              <ellipse fill="#141e21" cx="15" cy="23" rx="2" ry="3" />
              <circle fill="#f6fafd" cx="16" cy="22" r="1" />
              <path
                fill="#141e21"
                d="M10 19v-2c3.722 0 6-1.295 6-2h2c0 2.626-4.024 4-8 4zM38 19c-3.976 0-8-1.374-8-4h2c0 .705 2.278 2 6 2z"
              />
              <path
                fill="#273941"
                d="M24 35h-5.5a5.265 5.265 0 0 1 5.5-5 5.265 5.265 0 0 1 5.5 5z"
              />
              <path
                fill="#141e21"
                d="M24 31a5.4 5.4 0 0 1 5.39 4h.11a5.265 5.265 0 0 0-5.5-5 5.265 5.265 0 0 0-5.5 5h.11A5.4 5.4 0 0 1 24 31z"
              />
              <path
                d="M47 12a4 4 0 0 1-8 0c0-2.209 3-8 4-8s4 5.791 4 8z"
                fill="#3bc5f6"
              />
              <path
                d="M43 4c-1 0-4 5.791-4 8a4 4 0 0 0 8 0c0-2.209-3-8-4-8zm0 8.5a2.848 2.848 0 0 1-3-2.667C40 8.361 42.25 4.5 43 4.5s3 3.861 3 5.333a2.848 2.848 0 0 1-3 2.667z"
                fill="#00a3e1"
              />
              <path
                fill="#ffb32b"
                d="M43 16a3.991 3.991 0 0 1-3.861-3.008A4.661 4.661 0 0 0 39 14a4 4 0 0 0 6.846 2.807q-.255-.777-.562-1.529A3.982 3.982 0 0 1 43 16z"
              />
              <ellipse
                fill="#f6fafd"
                cx="44"
                cy="11"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 44 11)"
              />
              <ellipse
                fill="#f6fafd"
                cx="44.746"
                cy="9.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 44.746 9.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="36"
                cy="9"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 36 9)"
              />
              <ellipse
                fill="#f6fafd"
                cx="29.746"
                cy="4.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 29.746 4.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="33"
                cy="7"
                rx="1.65"
                ry="2.297"
                transform="rotate(-45.02 33 7)"
              />
            </g>
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <g id="_12-neutral" data-name="12-neutral">
              <circle cx="24" cy="24" r="23" fill="#ffce52" />
              <ellipse fill="#273941" cx="33" cy="18" rx="3" ry="4" />
              <ellipse fill="#273941" cx="15" cy="18" rx="3" ry="4" />
              <ellipse fill="#141e21" cx="33" cy="18" rx="2" ry="3" />
              <ellipse fill="#141e21" cx="15" cy="18" rx="2" ry="3" />
              <circle fill="#f6fafd" cx="34" cy="17" r="1" />
              <circle fill="#f6fafd" cx="16" cy="17" r="1" />
              <path
                d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
                fill="#ffe369"
              />
              <path
                d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
                fill="#ffb32b"
              />
              <path fill="#273941" d="M16 32h16v2H16z" />
              <ellipse
                fill="#f6fafd"
                cx="37"
                cy="9"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 37 9)"
              />
              <ellipse
                fill="#f6fafd"
                cx="30.746"
                cy="4.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 30.745 4.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="34"
                cy="7"
                rx="1.65"
                ry="2.297"
                transform="rotate(-45.02 34 7)"
              />
            </g>
          </svg>
        );
      case 3:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <circle cx="24" cy="24" r="23" fill="#ffce52" />
            <path
              d="M7 26c0 3.32 7.6 7 17 7s17-3.68 17-7a12.636 12.636 0 0 1-5.6 10.38 19.76 19.76 0 0 1-22.8 0A12.636 12.636 0 0 1 7 26z"
              fill="#ae2d4c"
            />
            <path
              fill="#f6fafd"
              d="M41 26c0 3.32-7.6 7-17 7S7 29.32 7 26c1 1 8 2 17 2s16-1 17-2z"
            />
            <ellipse fill="3273941" cx="33" cy="18" rx="3" ry="4" />
            <ellipse fill="#273941" cx="15" cy="18" rx="3" ry="4" />
            <ellipse fill="#141e21" cx="33" cy="18" rx="2" ry="3" />
            <ellipse fill="#141e21" cx="15" cy="18" rx="2" ry="3" />
            <circle fill="3f6fafd" cx="34" cy="17" r="1" />
            <circle fill="#f6fafd" cx="16" cy="17" r="1" />
            <path
              d="M24 35c7.962 0 14.613-2.641 16.468-5.466A12.089 12.089 0 0 0 41 26c0 3.32-7.6 7-17 7S7 29.32 7 26a12.089 12.089 0 0 0 .532 3.534C9.387 32.359 16.038 35 24 35z"
              fill="#8a293d"
            />
            <path
              d="M39.475 28.655A3.775 3.775 0 0 0 41 26c-1 1-8 2-17 2S8 27 7 26a3.775 3.775 0 0 0 1.525 2.655C11.223 29.394 17 30 24 30s12.777-.606 15.475-1.345z"
              fill="#ededed"
            />
            <path
              d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
              fill="#ffe369"
            />
            <path
              d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
              fill="#ffb32b"
            />
            <ellipse
              fill="#f6fafd"
              cx="37"
              cy="9"
              rx=".825"
              ry="1.148"
              transform="rotate(-45.02 37 9)"
            />
            <ellipse
              fill="#f6fafd"
              cx="30.746"
              cy="4.5"
              rx=".413"
              ry=".574"
              transform="rotate(-45.02 30.745 4.5)"
            />
            <ellipse
              fill="#f6fafd"
              cx="34"
              cy="7"
              rx="1.65"
              ry="2.297"
              transform="rotate(-45.02 34 7)"
            />
          </svg>
        );
      case 4:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <g id="_11-wow" data-name="11-wow">
              <circle cx="24" cy="24" r="23" fill="#ffce52" />
              <ellipse fill="#273941" cx="33" cy="18" rx="3" ry="4" />
              <ellipse fill="#273941" cx="15" cy="18" rx="3" ry="4" />
              <ellipse fill="#141e21" cx="33" cy="18" rx="2" ry="3" />
              <ellipse fill="#141e21" cx="15" cy="18" rx="2" ry="3" />
              <circle fill="#f6fafd" cx="34" cy="17" r="1" />
              <circle fill="#f6fafd" cx="16" cy="17" r="1" />
              <path
                fill="#273941"
                d="M37 10h-2a2 2 0 0 0-4 0h-2a4 4 0 0 1 8 0zM19 10h-2a2 2 0 0 0-4 0h-2a4 4 0 0 1 8 0z"
              />
              <path
                d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
                fill="#ffe369"
              />
              <path
                fill="#ffb32b"
                d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
              />
              <ellipse
                fill="#f6fafd"
                cx="34"
                cy="5"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 34 5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="26.746"
                cy="3.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 26.746 3.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="30"
                cy="4"
                rx="1.65"
                ry="2.297"
                transform="rotate(-45.02 30 4)"
              />
              <ellipse fill="#273941" cx="24" cy="34" rx="6" ry="9" />
              <path
                d="M24 43c2.542 0 4.71-2.375 5.584-5.723a7.985 7.985 0 0 0-11.168 0C19.29 40.625 21.458 43 24 43z"
                fill="#ae2d4c"
              />
              <path
                fill="#ffb32b"
                d="M24 43c-3.088 0-5.629-3.5-5.961-8-.024.329-.039.662-.039 1 0 4.971 2.686 9 6 9s6-4.029 6-9c0-.338-.015-.671-.039-1-.332 4.5-2.873 8-5.961 8z"
              />
              <path
                fill="#141e21"
                d="M24 27c3.088 0 5.629 3.5 5.961 8 .024-.329.039-.662.039-1 0-4.971-2.686-9-6-9s-6 4.029-6 9c0 .338.015.671.039 1 .332-4.5 2.873-8 5.961-8z"
              />
              <path
                d="M24 41c-2.132 0-3.989-1.682-5.052-4.2a7.95 7.95 0 0 0-.532.473C19.29 40.625 21.458 43 24 43s4.71-2.375 5.584-5.723a7.95 7.95 0 0 0-.532-.473C27.989 39.318 26.132 41 24 41z"
                fill="#8a293d"
              />
            </g>
          </svg>
        );
      case 5:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <g id="_13-love" data-name="13-love">
              <circle cx="24" cy="24" r="23" fill="#ffce52" />
              <path
                d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
                fill="#ffe369"
              />
              <path
                d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
                fill="#ffb32b"
              />
              <ellipse
                fill="#f6fafd"
                cx="37"
                cy="9"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 37 9)"
              />
              <ellipse
                fill="#f6fafd"
                cx="30.746"
                cy="4.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 30.745 4.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="34"
                cy="7"
                rx="1.65"
                ry="2.297"
                transform="rotate(-45.02 34 7)"
              />
              <path
                d="M34 39c0-2.76-4.47-5-10-5s-10 2.24-10 5l-.1.13A10.727 10.727 0 0 1 9 30.15 2.025 2.025 0 0 1 10.87 28c1.88 1.08 6.39 1 13.13 1s11.25.08 13.12-1A2.026 2.026 0 0 1 39 30.15a10.727 10.727 0 0 1-4.9 8.98z"
                fill="#273941"
              />
              <path
                fill="#ae2d4c"
                d="m34 39 .1.13A17.882 17.882 0 0 1 24 42a17.882 17.882 0 0 1-10.1-2.87L14 39c0-2.76 4.47-5 10-5s10 2.24 10 5z"
              />
              <path
                fill="#cf4054"
                d="M16.5 9a4.465 4.465 0 0 1 4.5 4.8C21 21 13.5 25 12 25c-.72 0-8.38-3.7-8.97-10.39Q3 14.205 3 13.8a4.451 4.451 0 0 1 3.58-4.7A4.053 4.053 0 0 1 7.5 9c2.25 0 3.75 1.6 4.5 4 .75-2.4 2.25-4 4.5-4zM45 13.8q0 .4-.03.81C44.44 21.3 37.44 25 36 25c-.75 0-9-4-9-11.2A4.465 4.465 0 0 1 31.5 9c2.25 0 3.75 1.6 4.5 4 .75-2.4 2.25-4 4.5-4a4.053 4.053 0 0 1 .92.1A4.451 4.451 0 0 1 45 13.8z"
              />
              <path
                d="M10.87 30c1.88 1.08 6.39 1 13.13 1s11.25.08 13.12-1a1.926 1.926 0 0 1 1.793 1.536A11.043 11.043 0 0 0 39 30.15 2.026 2.026 0 0 0 37.12 28c-1.87 1.08-6.38 1-13.12 1s-11.25.08-13.13-1A2.025 2.025 0 0 0 9 30.15a11.015 11.015 0 0 0 .087 1.385A1.92 1.92 0 0 1 10.87 30z"
                fill="#141e21"
              />
              <path
                d="M33.531 37.486A18.171 18.171 0 0 1 24 40a18.171 18.171 0 0 1-9.531-2.514A2.809 2.809 0 0 0 14 39l-.1.13A17.882 17.882 0 0 0 24 42a17.882 17.882 0 0 0 10.1-2.87L34 39a2.809 2.809 0 0 0-.469-1.514z"
                fill="#8a293d"
              />
              <path
                fill="#fbb40a"
                d="M36 25c-.71 0-8.131-3.59-8.921-10.081A6 6 0 0 0 27 15.8C27 23 35.25 27 36 27c1.44 0 8.44-3.7 8.97-10.39q.03-.41.03-.81a6.079 6.079 0 0 0-.07-.907C44.225 21.4 37.419 25 36 25zM12 25c-.71 0-8.131-3.59-8.921-10.081A6 6 0 0 0 3 15.8C3 23 11.25 27 12 27c1.44 0 8.44-3.7 8.97-10.39q.03-.41.03-.81a6.079 6.079 0 0 0-.07-.907C20.225 21.4 13.419 25 12 25z"
              />
              <path
                fill="#ae2d4c"
                d="M40.5 9c-2.25 0-3.75 1.6-4.5 4 .583-1.8 1.75-3 3.5-3a3.408 3.408 0 0 1 3.5 3.6c0 5.4-5.833 8.4-7 8.4-.56 0-6.518-2.775-6.977-7.793A8.167 8.167 0 0 1 29 13.6a3.366 3.366 0 0 1 2.784-3.525A3.243 3.243 0 0 1 32.5 10c1.75 0 2.917 1.2 3.5 3-.75-2.4-2.25-4-4.5-4a4.053 4.053 0 0 0-.92.1A4.451 4.451 0 0 0 27 13.8q0 .4.03.81C27.62 21.3 35.28 25 36 25c1.5 0 9-4 9-11.2A4.465 4.465 0 0 0 40.5 9zM16.5 9c-2.25 0-3.75 1.6-4.5 4 .583-1.8 1.75-3 3.5-3a3.408 3.408 0 0 1 3.5 3.6c0 5.4-5.833 8.4-7 8.4-.56 0-6.518-2.775-6.977-7.793A8.25 8.25 0 0 1 5 13.6a3.366 3.366 0 0 1 2.784-3.525A3.243 3.243 0 0 1 8.5 10c1.75 0 2.917 1.2 3.5 3-.75-2.4-2.25-4-4.5-4a4.053 4.053 0 0 0-.92.1A4.451 4.451 0 0 0 3 13.8q0 .4.03.81C3.62 21.3 11.28 25 12 25c1.5 0 9-4 9-11.2A4.465 4.465 0 0 0 16.5 9z"
              />
              <ellipse
                fill="#f6fafd"
                cx="42"
                cy="13"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 41.999 13)"
              />
              <ellipse
                fill="#f6fafd"
                cx="40.746"
                cy="11.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 40.746 11.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="18"
                cy="13"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 18 13)"
              />
              <ellipse
                fill="#f6fafd"
                cx="16.746"
                cy="11.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 16.745 11.5)"
              />
            </g>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 48 48" width={35} height={35}>
            <g id="_02-smile" data-name="02-smile">
              <circle cx="24" cy="24" r="23" fill="#ffce52" />
              <ellipse fill="#273941" cx="33" cy="18" rx="3" ry="4" />
              <ellipse fill="#273941" cx="15" cy="18" rx="3" ry="4" />
              <ellipse fill="#141e21" cx="33" cy="18" rx="2" ry="3" />
              <ellipse fill="#141e21" cx="15" cy="18" rx="2" ry="3" />
              <circle fill="#f6fafd" cx="34" cy="17" r="1" />
              <circle fill="#f6fafd" cx="16" cy="17" r="1" />
              <path
                fill="#273941"
                d="M24 39c-7.72 0-14-5.832-14-13h2c0 6.065 5.383 11 12 11s12-4.935 12-11h2c0 7.168-6.28 13-14 13z"
              />
              <path
                d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
                fill="#ffe369"
              />
              <path
                d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
                fill="#ffb32b"
              />
              <ellipse
                fill="#f6fafd"
                cx="37"
                cy="9"
                rx=".825"
                ry="1.148"
                transform="rotate(-45.02 37 9)"
              />
              <ellipse
                fill="#f6fafd"
                cx="30.746"
                cy="4.5"
                rx=".413"
                ry=".574"
                transform="rotate(-45.02 30.745 4.5)"
              />
              <ellipse
                fill="#f6fafd"
                cx="34"
                cy="7"
                rx="1.65"
                ry="2.297"
                transform="rotate(-45.02 34 7)"
              />
            </g>
          </svg>
        );
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
          <div className="bg-white w-[21rem] rounded-2xl flex flex-col items-center border border-gray-300 overflow-hidden">
            <div className="w-full h-[15.5rem] overflow-hidden">
              <Image
                width={335}
                height={335}
                alt="Portfolio"
                src="/portfolio.png"
                className="rounded-tr-2xl rounded-tl-2xl h-full object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="mt-2 mb-2 font-medium text-sm text-gray-500">
              Portfolio Design
            </p>
            <h1 className="flex mb-2 font-bold">
              Arnab&apos;s Portfolio
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
        </Link>
        <div className="bg-white border border-gray-300 w-[21rem] h-[5.8rem] mt-8 rounded-2xl">
          <p className="text-center mb-1">-rate my projects-</p>
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
                  />
                  <label
                    htmlFor={`star${value}`}
                    className="before:content-['\2605'] text-4xl cursor-pointer transition-all duration-300 ease-in-out text-gray-300"
                  ></label>
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
