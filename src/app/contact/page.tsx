import About2 from "@/components/About/About2";
import Contact1 from "@/components/Contact/Contact1";
import Contact2 from "@/components/Contact/Contact2";
import Contact3 from "@/components/Contact/Contact3";

const contactpage = () => {
  return (
    <div className="flex bg-[#f7f7f7] justify-center">
      <div className="mx-auto flex justify-between mobile:justify-center flex-col tablet:flex-row m-20">
        <Contact1 />
        <div className="tablet:ml-10">
          <Contact2 />
          <Contact3 />
          <About2 />
        </div>
      </div>
    </div>
  );
};

export default contactpage;
