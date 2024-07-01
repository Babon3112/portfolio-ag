"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home6 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3050);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="border border-gray-300 bg-white rounded-xl mt-20 tablet:mt-0 mobile:mt-7">
        <div className="flex mobile:w-[30rem] justify-evenly items-center border-b border-gray-300 h-[9.1rem]">
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=arnabg3112@gmail.com&tf=cm"
            target="_blank"
            className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full bg-white transition-all duration-200"
          >
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 flex flex-wrap rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-1/2 h-1/2 rounded-tl-full bg-[#c62828]"></div>
                <div className="w-1/2 h-1/2 rounded-tr-full bg-[#fbc02d]"></div>
                <div className="w-1/2 h-1/2 rounded-bl-full bg-[#1e88e5]"></div>
                <div className="w-1/2 h-1/2 rounded-br-full bg-[#4caf50]"></div>
              </div>

              <svg
                className="p-3 relative"
                width={45}
                height={45}
                viewBox="0 0 48 48"
              >
                <path
                  className="fill-[#4285F4] group-hover:fill-white"
                  d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"
                ></path>
                <path
                  className="fill-[#34A853] group-hover:fill-white"
                  d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"
                ></path>
                <path
                  className="fill-[#FBBC04] group-hover:fill-white"
                  d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
                ></path>
                <path
                  className="fill-[#EA4335] group-hover:fill-white"
                  fill-rule="evenodd"
                  d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  className="fill-[#C5221F] group-hover:fill-white"
                  d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
                ></path>
              </svg>
            </div>
          </Link>
          {/* <Link
            href="https://github.com/babon3112/"
            target="_blank"
            className="border border-[#2b3137] rounded-full bg-white hover:bg-[#2b3137] transition-all duration-200"
          >
            <svg
              className="p-3 hover:fill-white fill-[#2b3137]"
              height={45}
              width={45}
              viewBox="-2.5 0 19 19"
            >
              <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
            </svg>
          </Link> */}
          <Link
            href="https://www.linkedin.com/in/babon3112"
            target="_blank"
            className="border border-[#0077B5] rounded-full bg-white hover:bg-[#0077B5] transition-all duration-200"
          >
            <svg
              viewBox="0 -2 44 44"
              className="p-3 fill-[#0077B5] hover:fill-white"
              height={45}
              width={45}
            >
              <g transform="translate(-702.000000, -265.000000)">
                <path
                  d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                  id="LinkedIn"
                ></path>
              </g>
            </svg>
          </Link>
          <Link
            href="https://discord.com/invite/syEmGjNR"
            target="_blank"
            className="border border-[#5865f2] rounded-full bg-white hover:bg-[#5865f2] transition-all duration-200"
          >
            <svg
              height={45}
              width={45}
              className="p-3 fill-[#5865f2] hover:fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
            </svg>
          </Link>
          <Link
            href="https://t.me/Babon3112"
            target="_blank"
            className="border border-[#24a1de] rounded-full bg-white hover:bg-[#24a1de] transition-all duration-200"
          >
            <svg
              className="p-3 hover:fill-white fill-[#24a1de]"
              viewBox="0 0 300 300"
              height={45}
              width={45}
            >
              <g id="XMLID_496_">
                <path
                  id="XMLID_497_"
                  d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412
		c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22
		c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207
		c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146
		c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"
                />
              </g>
            </svg>
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=916295400897"
            target="_blank"
            className="border border-[#25d366] rounded-full bg-white hover:bg-[#25d366] transition-all duration-200"
          >
            <svg
              height={45}
              width={45}
              className="p-3 hover:fill-white fill-[#25d366]"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=arnabbabon2002@gmail.com&tf=cm"
            target="_blank"
            className="group border border-t-[#c62828] border-l-[#1e88e5] border-b-[#4caf50] border-r-[#fbc02d] rounded-full bg-white transition-all duration-200"
          >
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 flex flex-wrap rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-1/2 h-1/2 rounded-tl-full bg-[#c62828]"></div>
                <div className="w-1/2 h-1/2 rounded-tr-full bg-[#fbc02d]"></div>
                <div className="w-1/2 h-1/2 rounded-bl-full bg-[#1e88e5]"></div>
                <div className="w-1/2 h-1/2 rounded-br-full bg-[#4caf50]"></div>
              </div>

              <svg
                className="p-3 relative"
                width={45}
                height={45}
                viewBox="0 0 48 48"
              >
                <path
                  className="fill-[#4285F4] group-hover:fill-white"
                  d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"
                ></path>
                <path
                  className="fill-[#34A853] group-hover:fill-white"
                  d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"
                ></path>
                <path
                  className="fill-[#FBBC04] group-hover:fill-white"
                  d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
                ></path>
                <path
                  className="fill-[#EA4335] group-hover:fill-white"
                  fill-rule="evenodd"
                  d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  className="fill-[#C5221F] group-hover:fill-white"
                  d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center my-2">
          <p className="text-gray-500 text-xs font-semibold mb-1">
            GET IN TOUCH
          </p>
          <h1 className="text-xl font-bold mt-1">Profiles</h1>
        </div>
      </div>
    </div>
  );
};

export default Home6;
