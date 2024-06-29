import { useEffect, useState } from "react";

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
      <div className="border border-gray-300 rounded-2xl bg-white">
        <h1 className="text-center text-lg font-semibold tracking-wider hover:tracking-widest transition-all duration-500">
          | CERTIFICATIONS |
        </h1>
      </div>
    </div>
  );
};

export default About6;
