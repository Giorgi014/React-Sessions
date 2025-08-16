import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ToggleWrapper from "./ToggleWrapper";

const SessionSeven = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer absolute top-0 left-5"
      >
        <FaArrowLeftLong />
        Back
      </div>
      <ToggleWrapper />
    </div>
  );
};

export default SessionSeven;
