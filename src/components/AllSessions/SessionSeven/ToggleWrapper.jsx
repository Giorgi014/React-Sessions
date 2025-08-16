import React, { useState } from "react";
import LoggerComponent from "./LoggerComponent";

const ToggleWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-3 font-bold text-white bg-green-500 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
      >
        {isVisible ? "Hide" : "Show"} Logger Component
      </button>
      {isVisible && <LoggerComponent />}
    </div>
  );
};

export default ToggleWrapper;
