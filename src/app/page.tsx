import Home1 from "@/components/Home/Home1";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import Home4 from "@/components/Home/Home4";
import Home5 from "@/components/Home/Home5";
import Home6 from "@/components/Home/Home6";
import Home7 from "@/components/Home/Home7";
import Home8 from "@/components/Home/Home8";
import HomeText from "@/components/Home/HomeText";

export default function Home() {
  return (
    <div className="flex bg-zinc-200 dark:bg-zinc-950">
      <div className="mx-auto flex flex-col m-20">
        <div className="flex flex-col tablet:flex-row items-center">
          <Home1 />
          <div className="h-[16.5rem] space-y-7">
            <HomeText />
            <div className="text-zinc-950 dark:text-zinc-50 flex justify-between mt-5 flex-col mobile:flex-row">
              <Home2 />
              <Home3 />
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row justify-between mobile:mt-7 mt-[17.5rem]">
          <div className="flex tablet:space-x-7 justify-between flex-col mobile:flex-row mt-5 tablet:mt-0">
            <Home4 />
            <Home5 />
          </div>
          <Home6 />
        </div>
        <div className="flex justify-evenly mt-10 flex-col tablet:flex-row mobile:items-center">
          <Home7 />
          <Home8 />
        </div>
      </div>
    </div>
  );
}
