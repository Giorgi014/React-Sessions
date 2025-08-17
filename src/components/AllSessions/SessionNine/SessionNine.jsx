import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import UncontrolledCounter from "./UncontrolledCounter";

const SessionNine = () => {
  const navigate = useNavigate();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [disableControls, setDisableControls] = useState(false);

  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer absolute top-0 left-5"
      >
        <FaArrowLeftLong />
        Back
      </div>
      <div className="min-h-screen flex w-screen flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-600">
          Shared Counter Controller
        </h1>

        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="disable"
            checked={disableControls}
            onChange={(e) => setDisableControls(e.target.checked)}
            className="h-4 w-4 text-purple-600 rounded"
          />
          <label htmlFor="disable" className="text-gray-700">
            Disable Buttons
          </label>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-80">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Controlled Counter
          </h2>
          <CounterDisplay count={count1} />
          <CounterControls
            count={count1}
            setCount={setCount1}
            disabled={disableControls}
          />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-80">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Counter 2
          </h2>
          <CounterDisplay count={count2} />
          <CounterControls
            count={count2}
            setCount={setCount2}
            disabled={disableControls}
          />
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Uncontrolled Counter
          </h2>
          <UncontrolledCounter disabled={disableControls} />
        </div>
      </div>
    </div>
  );
};

export default SessionNine;
