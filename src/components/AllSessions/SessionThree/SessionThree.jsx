import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const SessionThree = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen bg-[#f8f9fa] text-[#333] font-serif">
      <div
        className="flex cursor-pointer absolute top-0 left-[20px]"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong />
        Back
      </div>
    </div>
  );
};

export default SessionThree;
