import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CounterWidget from "./CounterWidget";
import TextToggleWidget from "./TextToggleWidget";

const SessionThree = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div
        className="flex cursor-pointer absolute top-0 left-[20px]"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong />
        Back
      </div>
      <h1 className="text-4xl font-bold text-center text-slate-900 mb-10">
        ჩემი ინტერაქტიული Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CounterWidget />
        <TextToggleWidget />
      </div>
    </div>
  );
};

export default SessionThree;
