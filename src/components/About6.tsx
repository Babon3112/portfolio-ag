"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import certificates from "@/Certificates.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Zoom,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const About6 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="border border-gray-300 rounded-2xl bg-white p-4 mobile:pb-2 w-[21rem] mobile:w-[40rem]">
        <h1 className="text-center text-lg font-semibold tracking-wider hover:tracking-widest transition-all duration-500">
          | CERTIFICATIONS |
        </h1>
        <div className="flex justify-center items-center mt-12 mb-6">
          <Swiper
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[
              Zoom,
              Navigation,
              Pagination,
              Autoplay,
              Mousewheel,
              Keyboard,
            ]}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center mb-6">
                  <Image
                    src={certificate.image}
                    alt={certificate.name}
                    width={200}
                    height={200}
                    // objectFit="cover"
                  />
                  <h3 className="text-sm tracking-wider m-6 text-gray-500">
                    {certificate.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About6;
