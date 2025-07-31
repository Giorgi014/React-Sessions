import React, { useState } from "react";

const CounterWidget = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[400px] mx-auto mt-[20px]">
      <h3 className="text-xl font-semibold mb-4 text-center">
        დინამიური მრიცხველი
      </h3>
      <p className="text-2xl font-bold text-center">{count}</p>
      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={increment}
          className="px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out cursor-pointer"
        >
          გაზრდა
        </button>
        <button
          onClick={reset}
          className="px-6 py-4 bg-amber-400 text-white rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition duration-200 ease-in-out cursor-pointer"
        >
          განახლება
        </button>
        <button
          onClick={decrement}
          className="px-6 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 ease-in-out cursor-pointer"
        >
          შემცირება
        </button>
      </div>
    </div>
  );
};

export default CounterWidget;
