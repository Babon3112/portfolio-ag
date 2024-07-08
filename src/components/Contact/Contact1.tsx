"use client";
import axios from "axios";
import { Loader, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import countryCodes from "@/CountryCodes.json";

const Contact1 = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const sendMessage = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const fullMobileNo = `${countryCode}${mobileNo}`;
      await axios.post("/api/sendMessage", {
        name,
        mobileNo: fullMobileNo,
        email,
        message,
      });
      toast({ title: "Message sent successfully", variant: "default" });
      setLoading(false);
      setName("");
      setCountryCode("+91");
      setMobileNo("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      toast({ title: "Failed to send message", variant: "destructive" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        showComponent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[21rem] mobile:w-[40rem] border border-gray-300 bg-white rounded-xl py-6 mobile:p-8 text-sm font-medium">
        <h1 className="text-2xl font-semibold text-center text-gray-600">
          GET IN TOUCH
        </h1>
        <form
          className="flex flex-col mx-6 mt-6 space-y-8 justify-center items-center"
          onSubmit={sendMessage}
        >
          <input
            className="w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <div className="flex w-full">
            <select
              className="appearance-none pb-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            >
              {countryCodes.map((country) => (
                <option
                  key={country.code}
                  value={country.dial_code}
                  className="py-2 px-4 hover:bg-blue-100"
                >
                  {country.code} ({country.dial_code})
                </option>
              ))}
            </select>

            <input
              className="remove-arrow w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
              type="number"
              name="mobile"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Enter Your Mobile No."
              required
            />
          </div>
          <input
            className="w-full pb-2 border-b focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-300 placeholder:font-normal"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <textarea
            className="w-full p-2 h-32 border rounded-2xl focus:outline-none placeholder:tracking-wider placeholder:hover:tracking-widerer placeholder:transition-all placeholder:duration-500 placeholder:font-normal"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share Your Feedback..."
            required
          />
          <button
            className="group contactButton border rounded-2xl w-32 h-16 text-lg overflow-hidden flex justify-center items-center"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader
                  color="#ff9954"
                  className="animate-spin size-8"
                  strokeWidth={3}
                />
              </>
            ) : (
              <>
                <Send
                  fill="black"
                  className="sendButton mr-2 size-8 transition-all duration-300 group-hover:fill-[#FF9954] group-hover:rotate-45 group-hover:translate-x-6 group-hover:scale-110"
                  color="white"
                  strokeWidth={0.5}
                />
                <p className="transition-all duration-300 group-hover:translate-x-20">
                  Send
                </p>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
