import About2 from "@/components/About2";
import Contact1 from "@/components/Contact1";
import Contact2 from "@/components/Contact2";
import Contact3 from "@/components/Contact3";

const contactpage = () => {
  return (
    <div className="flex bg-[#f7f7f7] justify-center">
      <div className="mx-auto flex justify-between mobile:justify-center flex-col tablet:flex-row m-20">
        <Contact1 />
        <div className="ml-10">
          <Contact2 />
          <Contact3 />
          <About2 />
        </div>
      </div>
    </div>
  );
};

export default contactpage;
