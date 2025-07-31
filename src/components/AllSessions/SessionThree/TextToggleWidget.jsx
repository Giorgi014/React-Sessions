import { useState } from "react";

const TextToggleWidget = () => {
  const [inputText, setInputText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const inputChange = (e) => {
    setInputText(e.target.value);
  };
  const visibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md top-[50px] flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">
        ინტერაქტიული ტექსტი და გადამრთველი
      </h3>
      <input
        type="text"
        value={inputText}
        onChange={inputChange}
        placeholder="შეიყვანეთ ტექსტი"
        className="w-[500px] p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-1 focus:ring-green-500"
      />
      {isVisible && (
        <p className="text-gray-700 text-lg mb-4 text-center min-h-[2rem]">
          {" "}
          ნაჩვენები ტექსტი:{" "}
          <span className="font-medium text-green-600">
            {inputText || "ტექსტი არ არის შეყვანილი"}
          </span>
        </p>
      )}
      <div className="flex flex-col items-center">
        <button
          onClick={visibility}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out mb-3"
        >
          {isVisible ? "ტექსტის დამალვა" : "ტექსტის ჩვენება"}
        </button>

        <p className="text-sm text-gray-500">
          სიმბოლოები: <span className="font-bold">{inputText.length}</span>
        </p>
      </div>
    </div>
  );
};

export default TextToggleWidget;
