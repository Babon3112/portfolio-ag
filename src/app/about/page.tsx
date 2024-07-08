"use client";
import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About3 from "@/components/About/About3";
import About4 from "@/components/About/About4";
import About5 from "@/components/About/About5";
import About6 from "@/components/About/About6";

const AboutPage = () => {
  return (
    <div className="flex bg-[#f7f7f7] justify-center">
      <div className="mx-auto flex justify-center mobile:justify-center flex-col tablet:flex-row m-20">
        <div className="flex flex-col items-center">
          <About1 />
          <About2 />
          <About3 />
        </div>
        <div className="tablet:ml-10 mt-8 tablet:mt-0 w-[21rem] mobile:w-[40rem]">
          <About4 />
          <About5 />
          <About6 />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
