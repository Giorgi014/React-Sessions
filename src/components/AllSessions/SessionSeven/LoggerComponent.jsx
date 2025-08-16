import React, { useState, useEffect } from "react";

const LoggerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    const intervalId = setInterval(() => {
      console.log("Interval running...");
    }, 2000);

    return () => {
      console.log("Unmounted");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Updated");
  }, [count]);

  return (
    <div className="p-6 mt-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800">Logger Component</h3>
      <p className="mt-2 text-gray-600">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Increment Count
      </button>
    </div>
  );
};

export default LoggerComponent;
