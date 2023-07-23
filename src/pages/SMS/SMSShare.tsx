// challenge id: 241
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SMSShare = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("http://www.staggeringbeauty.com/");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 500);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const Tooltip = () => {
    return (
      <span
        className={`absolute top-0 left-0 mt-8 bg-gray-900/90 text-white px-2 py-1 rounded ${
          showTooltip ? "opacity-100 fade-out" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500`}
      >
        Copied!
      </span>
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-100/90">
      <div className="relative w-[520px] rounded-xl bg-white p-5 shadow-md">
        <RxCross1 className="absolute right-6 top-2 my-3" color="#d4d4d4" />
        <div className="m-10">
          <h2 className="mb-3 text-[1.125rem] font-bold">Send install link to mobile device</h2>
          <small className="mb-2.5 inline-block">
            Send via SMS or visit the private URL on the mobie device to install this app directly to the device.
          </small>
          <form action="#" className="mb-8 flex text-sm font-semibold w-full">
            <select
              className="bg-gray-200 pl-4 rounded-tl rounded-bl focus:outline-blue-500"
              name="country"
              id="country"
            >
              <option value="id">ID</option>
              <option value="au">AU</option>
              <option value="sg">SG</option>
            </select>
            <input
              className="flex-1 bg-gray-200 px-4 py-4"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter mobile number"
            />
            <button className="rounded-br rounded-tr bg-blue-500 px-4 py-2 text-sm text-white">Send</button>
          </form>
          <h4 className="mb-2.5 text-sm font-bold uppercase">Share Link</h4>
          <div className="flex justify-between font-light">
            <p id="copy">http://www.staggeringbeauty.com/</p>
            <button
              className="relative cursor-pointer text-sm text-blue-500 hover:opacity-80"
              onClick={handleCopyToClipboard}
            >
              Copy
              {showTooltip && <Tooltip />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSShare;
